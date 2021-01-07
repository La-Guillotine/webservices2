import { Request, Response } from "express";
import { Anime } from "../models/anime.model";


export class AnimeController {

    public getAnimes (req: Request, res: Response) {
        Anime.findAll<Anime>({
            order: [
                ['id', 'ASC']
            ],
            include:[Anime.associations.users]
        })
        .then((animes: Array<Anime>) => res.json(animes))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getAnime (req: Request, res: Response) {
        Anime.findOne({ 
            where: { id: req.params.id },
            include:[Anime.associations.users]
         })
            .then((anime: Anime) => res.json(anime))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addAnime (req: Request, res: Response) {
        Anime.create({ name: req.body.name})
            .then((anime: Anime) => res.json(anime))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeAnime (req: Request, res: Response) {
        Anime.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateAnime (req: Request, res: Response) {
        Anime.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,animes]: [number,Array<Anime>]) => res.json({number,animes}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateAnime (req: Request, res: Response) {
        Anime.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([anime,created]: [Anime,boolean]) => res.json({anime,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}