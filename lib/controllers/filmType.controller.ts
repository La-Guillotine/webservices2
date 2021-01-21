import { Request, Response } from "express";
import { FilmType } from "../models/filmType.model";
import { Op } from "sequelize";

export class FilmTypeController {

    public async getFilmTypes (req: Request, res: Response) {

        const count : number= await FilmType.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0
        const search : string = req.query.name as string || ""

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        FilmType.findAll<FilmType>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
            include:[FilmType.associations.users],
            where:{
                "name":{
                    [Op.substring]:search
                }
            }
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