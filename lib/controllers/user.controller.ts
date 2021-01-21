import { Request, Response } from "express";
import { User } from "../models/user.model";
import * as bcrypt from "bcrypt";

export class UserController {

    public async getUsers (req: Request, res: Response) {

        const count : number= await User.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        User.findAll<User>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
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
            .then((users: Array<User>) => res.json(users))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getUser (req: Request, res: Response) {
        User.findOne({ 
            where: { id: req.params.id },
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
            .then((user: User) => res.json(user))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public async addUser (req: Request, res: Response) {
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
            .then((user: User) => res.json(user))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeUser (req: Request, res: Response) {
        User.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public async updateUser (req: Request, res: Response) {
        let password: String = await bcrypt.hash(req.body.password, 10);

        await User.update({
            email: req.body.email,
            password: password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            tel_number: req.body.tel_number,
            age: req.body.age,
            address: req.body.address,
            city_id: req.body.city_id,
            astrologicalsign_id: req.body.astrologicalsign_id
        },{ where: { id: req.params.id } })
            .then(([number,users]: [number,Array<User>]) => res.json({number,users}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public async updateOrCreateUser (req: Request, res: Response) {
        let password: String = await bcrypt.hash(req.body.password, 10);

        await User.upsert({
            id:req.params.id,
            email: req.body.email,
            password: password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            tel_number: req.body.tel_number,
            age: req.body.age,
            address: req.body.address,
            city_id: req.body.city_id,
            astrologicalsign_id: req.body.astrologicalsign_id
        },{ returning:true})
            .then(([user,created]: [User,boolean]) => res.json({user,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getCompatibility (req: Request, res: Response){
        User.findAll<User>({
            order: [
                ['id', 'ASC']
            ],
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
            .then((users: Array<User>) => {
                let userChoisi: User = users.filter(obj => obj.id == Number(req.params.id))[0];
                let commonCount: number;
                // console.log(userChoisi.get({plain:true}));
                users.forEach((user: User) => {
                    commonCount = 0;
                    if(user != userChoisi){
                        // signes astrologiques
                        if (user.get({plain: true}).astrologicalsign.id == userChoisi.get({plain: true}).astrologicalsign.id) commonCount++;
                        
                        // régions et villes
                        if(user.get({plain: true}).city.id == userChoisi.get({plain: true}).city.id) commonCount++;
                        else if(user.get({plain: true}).city.region_id == userChoisi.get({plain: true}).city.region_id) commonCount+= 0.5;
                        
                        // animaux
                        for(let animal of user.get({plain:true}).animals){
                            for(let b of userChoisi.get({plain:true}).animals){
                                if(animal.id == b.id) commonCount++;
                            }
                        }
                        
                        // animes
                        for(let anime of user.get({plain:true}).animes){
                            for(let b of userChoisi.get({plain:true}).animes){
                                if(anime.id == b.id) commonCount++;
                            }
                        }
                        
                        // cars
                        for(let car of user.get({plain:true}).cars){
                            for(let b of userChoisi.get({plain:true}).cars){
                                if(car.id == b.id) commonCount++;
                                else if(car.brand == b.brand) commonCount += 0.5;
                            }
                        }
                        
                        // destinations
                        for(let destination of user.get({plain:true}).destinations){
                            for(let b of userChoisi.get({plain:true}).destinations){
                                if(destination.id == b.id) commonCount++;
                            }
                        }
                       
                        // drinks
                        for(let drink of user.get({plain:true}).drinks){
                            for(let b of userChoisi.get({plain:true}).drinks){
                                if(drink.id == b.id) commonCount++;
                            }
                        }
                        
                        // filmtypes
                        for(let filmtype of user.get({plain:true}).filmtypes){
                            for(let b of userChoisi.get({plain:true}).filmtypes){
                                if(filmtype.id == b.id) commonCount++;
                            }
                        }
                        
                        // foods
                        for(let food of user.get({plain:true}).foods){
                            for(let b of userChoisi.get({plain:true}).foods){
                                if(food.id == b.id) commonCount++;
                            }
                        }
                        
                        // musictypes
                        for(let musictype of user.get({plain:true}).musictypes){
                            for(let b of userChoisi.get({plain:true}).musictypes){
                                if(musictype.id == b.id) commonCount++;
                            }
                        }
                        
                        // sports
                        for(let sport of user.get({plain:true}).sports){
                            for(let b of userChoisi.get({plain:true}).sports){
                                if(sport.id == b.id) commonCount++;
                            }
                        }
                        
                        // videogame
                        for(let videogame of user.get({plain:true}).videogames){
                            for(let b of userChoisi.get({plain:true}).videogames){
                                if(videogame.id == b.id) commonCount++;
                            }
                        }
                        console.log(commonCount);
                    }
                });

                res.json(userChoisi);
            })
            .catch((err: Error) => res.status(500).json(err))
        ;
        

    }

}