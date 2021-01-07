import { Request, Response } from "express";
import { User } from "../models/user.model";
import * as bcrypt from "bcrypt";

export class UserController {

    public getUsers (res: Response) {
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

}