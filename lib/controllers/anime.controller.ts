import { Request, Response } from "express";
import { Anime } from "../models/anime.model";


export class AnimeController {

    public getAnimes (req: Request, res: Response) {
        Anime.findAll<Anime>({})
        .then((animes: Array<Anime>) => res.json(animes))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getAnime (req: Request, res: Response) {
        Anime.findOne({ where: { id: req.params.id } })
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

}