import { Request, Response } from "express";
import { Food } from "../models/food.model";

export class FoodController {

    public getFoods (req: Request, res: Response) {
        Food.findAll<Food>({})
        .then((foods: Array<Food>) => res.json(foods))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getFood (req: Request, res: Response) {
        Food.findOne({ where: { id: req.params.id } })
            .then((food: Food) => res.json(food))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addFood (req: Request, res: Response) {
        Food.create({ name: req.body.name })
            .then((food: Food) => res.json(food))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeFood (req: Request, res: Response) {
        Food.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}