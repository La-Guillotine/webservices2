import { Request, Response } from "express";
import { FilmType } from "../models/filmType.model";

export class FilmTypeController {

    public getFilmTypes (req: Request, res: Response) {
        FilmType.findAll<FilmType>({
            include:[FilmType.associations.users]
        })
        .then((filmTypes: Array<FilmType>) => res.json(filmTypes))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getFilmType (req: Request, res: Response) {
        FilmType.findOne({ 
            where: { id: req.params.id },
            include:[FilmType.associations.users]
         })
        .then((filmType: FilmType) => res.json(filmType))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public addFilmType (req: Request, res: Response) {
        FilmType.create({ name: req.body.name })
        .then((filmType: FilmType) => res.json(filmType))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public removeFilmType (req: Request, res: Response) {
        FilmType.destroy({ where: { id: req.params.id } })
        .then((value: number) => res.json(value))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public updateFilmType (req: Request, res: Response) {
        FilmType.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,filmTypes]: [number,Array<FilmType>]) => res.json({number,filmTypes}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateFilmType (req: Request, res: Response) {
        FilmType.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([filmType,created]: [FilmType,boolean]) => res.json({filmType,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}