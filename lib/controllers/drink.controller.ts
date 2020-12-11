import { Request, Response } from "express";
import { Drink } from "../models/drink.model";

export class DrinkController {

    public getDrinks (req: Request, res: Response) {
        Drink.findAll<Drink>({
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

}