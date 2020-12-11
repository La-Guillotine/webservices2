import { Request, Response } from "express";
import { Videogame } from "../models/videogame.model";

export class VideoGameController {

    public getVideoGames (req: Request, res: Response) {
        Videogame.findAll<Videogame>({
            include:[Videogame.associations.users]
        })
            .then((videoGames: Array<Videogame>) => res.json(videoGames))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getVideoGame (req: Request, res: Response) {
        Videogame.findOne({ 
            where: { id: req.params.id },
            include:[Videogame.associations.users]
         })
            .then((videoGame: Videogame) => res.json(videoGame))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addVideoGame (req: Request, res: Response) {
        Videogame.create({ name: req.body.name })
            .then((videoGame: Videogame) => res.json(videoGame))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeVideoGame (req: Request, res: Response) {
        Videogame.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}