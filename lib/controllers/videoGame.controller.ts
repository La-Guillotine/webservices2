import { Request, Response } from "express";
import { Videogame } from "../models/videogame.model";
import { Op } from "sequelize";

export class VideoGameController {

    public async getVideoGames (req: Request, res: Response) {

        const count : number= await Videogame.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0
        const search : string = req.query.name as string || ""

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        Videogame.findAll<Videogame>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
            include:[Videogame.associations.users],
            where:{
                "name":{
                    [Op.substring]:search
                }
            }
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