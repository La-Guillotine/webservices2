import { Request, Response } from "express";
import { Drink } from "../models/drink.model";

export class DrinkController {

    public async getDrinks (req: Request, res: Response) {

        const count : number= await Drink.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        Drink.findAll<Drink>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
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