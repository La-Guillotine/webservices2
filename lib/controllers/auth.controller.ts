import { Request, Response } from "express";
import { User } from "../models/user.model";
import { Animal } from "../models/animal.model";
import { Anime } from "../models/anime.model";
import { AstrologicalSign } from "../models/astrologicalSign.model"
import { Car } from "../models/car.model";
import { City } from '../models/city.model';
import { Destination } from "../models/destination.model";
import { Drink } from "../models/drink.model";
import { FilmType } from "../models/filmType.model";
import { Food } from "../models/food.model";
import { MusicType } from "../models/musicType.model";
import { Region } from "../models/region.model";
import { Sport } from "../models/sport.model";
import { Videogame } from "../models/videogame.model";
import { createToken } from "../config/auth"
import * as nodemailer from 'nodemailer'
import * as bcrypt from "bcrypt";

export class AuthController {

    public async login (req: Request, res: Response) {
        User.findOne({ 
            where: { email: req.body.email },
            include: [
                User.associations.city,
                User.associations.animals,
                User.associations.animes,
                User.associations.astrologicalsign,
                User.associations.cars,
                User.associations.destinations,
                User.associations.drinks,
                User.associations.filmtypes,
                User.associations.foods,
                User.associations.musictypes,
                User.associations.sports,
                User.associations.videogames
            ]
        })
        .then((user: User) => {
             // user = object || user = null|
            if(!user){
                res.json({ message: "Cet utilisateur n'existe pas" })
            }else{
                //Vérifier le mot de passe
                console.log(user.password)
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const token = createToken(user)
                    res.json({ access_token: token })
                }else{
                    //Si mot de passe incorrect, on renvoie une erreur
                    res.json({ message: 'Mot de passe incorrect' })
                }
            }
        })
        .catch((err: Error) => res.json(err))
    }

    public async register (req: Request, res: Response) {
        let password: String = await bcrypt.hash(req.body.password, 10);

        await User.create({ 
                email: req.body.email,
                password: password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                tel_number: req.body.tel_number,
                age: req.body.age,
                address: req.body.address,
                city_id: req.body.city_id,
                astrologicalsign_id:req.body.astrologicalsign_id
            })
            .then(async (user: User) => {
                if(!user){
                    res.status(401).json({ message: "Une erreur s'est produite lors de l'enregistrement." })
                }else{

                    // Generate test SMTP service account from ethereal.email
                    // Only needed if you don't have a real mail account for testing
                    let testAccount = await nodemailer.createTestAccount();

                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        host: "smtp-mail.outlook.com",
                        port: 587,
                        secure: false, // true for 465, false for other ports
                        auth: {
                            user: process.env.MAIL_LOGIN, 
                            pass: process.env.MAIL_PASSWORD, 
                        },
                        tls: {
                            ciphers:'SSLv3'
                        },
                    });

                    // send mail with defined transport object
                    let info = await transporter.sendMail({
                        from: '"Web Services" <webservices_ynov@outlook.com>',
                        to: "valentin.carrichon@outlook.com",
                        subject: "Confirmation d'inscription",
                        text: "Ton compte a bien été créé",
                        html: "<b>Ton compte a bien été créé</b><br><br><b>Login:<b> "+req.body.email,
                    });

                    res.json(user)
                    
                }
            })
            .catch((err: Error) => res.json(err))
    }

    public async datas (req: Request, res: Response) {
     
        const totalAnimals = await Animal.count().catch((err: Error) => res.json(err))
        const totalAnimes = await Anime.count().catch((err: Error) => res.json(err))
        const totalAStrologicalSigns = await AstrologicalSign.count().catch((err: Error) => res.json(err))
        const totalCars = await Car.count().catch((err: Error) => res.json(err))
        const totalCities = await City.count().catch((err: Error) => res.json(err))
        const totalDestinations = await Destination.count().catch((err: Error) => res.json(err))
        const totalDrinks = await Drink.count().catch((err: Error) => res.json(err))
        const totalFilmTypes = await FilmType.count().catch((err: Error) => res.json(err))
        const totalFood = await Food.count().catch((err: Error) => res.json(err))
        const totalMusicTypes = await MusicType.count().catch((err: Error) => res.json(err))
        const totalRegions = await Region.count().catch((err: Error) => res.json(err))
        const totalSports = await Sport.count().catch((err: Error) => res.json(err))
        const totalUsers = await User.count().catch((err: Error) => res.json(err))
        const totalVideoGames = await Videogame.count().catch((err: Error) => res.json(err))

        const total = {
            "animals":totalAnimals,
            "animes":totalAnimes,
            "astrologicalSigns":totalAStrologicalSigns,
            "cars":totalCars,
            "cities":totalCities,
            "destinations":totalDestinations,
            "drinks":totalDrinks,
            "filmTypes":totalFilmTypes,
            "foods":totalFood,
            "musicTypes":totalMusicTypes,
            "regions":totalRegions,
            "sports":totalSports,
            "users":totalUsers,
            "videoGames":totalVideoGames,
        }

        res.json(total)
        
    }





}