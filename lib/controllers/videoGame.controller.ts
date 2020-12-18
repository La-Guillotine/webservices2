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

    public updateVideogame (req: Request, res: Response) {
        Videogame.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,videogames]: [number,Array<Videogame>]) => res.json({number,videogames}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateVideogame (req: Request, res: Response) {
        Videogame.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([videogame,created]: [Videogame,boolean]) => res.json({videogame,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}