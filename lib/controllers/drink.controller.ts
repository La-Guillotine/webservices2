import { Request, Response } from "express";
import { Drink } from "../models/drink.model";

export class DrinkController {

    public getDrinks (req: Request, res: Response) {
        Drink.findAll<Drink>({
            order: [
                ['id', 'ASC']
            ],
            include:[Drink.associations.users]
        })
            .then((drinks: Array<Drink>) => res.json(drinks))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getDrink (req: Request, res: Response) {
        Drink.findOne({ 
            where: { id: req.params.id },
            include:[Drink.associations.users]
         })
            .then((drink: Drink) => res.json(drink))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addDrink (req: Request, res: Response) {
        Drink.create({ name: req.body.name, isAlcoholised: req.body.isAlcoholised })
            .then((drink: Drink) => res.json(drink))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeDrink (req: Request, res: Response) {
        Drink.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateDrink (req: Request, res: Response) {
        Drink.update({name: req.body.name, isAlcoholised: req.body.isAlcoholised},{ where: { id: req.params.id } })
            .then(([number,drinks]: [number,Array<Drink>]) => res.json({number,drinks}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateDrink (req: Request, res: Response) {
        Drink.upsert({id:req.params.id,name: req.body.name, isAlcoholised: req.body.isAlcoholised},{ returning:true})
            .then(([drink,created]: [Drink,boolean]) => res.json({drink,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}