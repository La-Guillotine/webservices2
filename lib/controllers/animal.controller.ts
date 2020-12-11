import { Request, Response } from "express";


export class AnimalController {

    public getAnimals (req: Request, res: Response) {
        res.json({
            message: "Hello boi",
        });
    }

    public getAnimal (req: Request, res: Response) {

    }

    public addAnimal (req: Request, res: Response) {

    }

    public removeAnimal (req: Request, res: Response) {

    }

}