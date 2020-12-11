import { Request, Response } from "express";
import { Animal } from "../models/animal";

export class AnimalController {

    public getAnimals (req: Request, res: Response) {
        Animal.findAll<Animal>({})
            .then((animals: Array<Animal>) => res.json(animals))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getAnimal (req: Request, res: Response) {

        Animal.findOne({ where: { id: req.params.id } })
            .then((animal: Animal) => res.json(animal))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addAnimal (req: Request, res: Response) {
        
    }

    public removeAnimal (req: Request, res: Response) {

    }

}