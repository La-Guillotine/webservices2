import { Request, Response } from "express";
import { User } from "../models/user.model";
import { createToken } from "../config/auth"

export class AuthController {

    public login (req: Request, res: Response) {
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
                res.status(401).json({ message: "Cet utilisateur n'existe pas" })
            }else{
                //Vérifier le mot de passe
                if(user.password == req.body.password){
                    const token = createToken(user)
                    res.json({ access_token: token })
                }else{
                    //Si mot de passe incorrect, on renvoie une erreur
                    res.status(401).json({ message: 'Mot de passe incorrect' })
                }
            }
        })
        .catch((err: Error) => res.status(500).json(err))
    }

}