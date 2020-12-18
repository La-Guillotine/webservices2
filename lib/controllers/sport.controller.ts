import { Request, Response } from "express";
import { Sport } from "../models/sport.model";

export class SportController {

    public getSports (req: Request, res: Response) {
        Sport.findAll<Sport>({
            include:[Sport.associations.users]
        })
            .then((sports: Array<Sport>) => res.json(sports))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getSport (req: Request, res: Response) {
        Sport.findOne({ 
            where: { id: req.params.id },
            include:[Sport.associations.users]
         })
            .then((sport: Sport) => res.json(sport))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addSport (req: Request, res: Response) {
        Sport.create({ name: req.body.name, isTeamPlay: req.body.isTeamPlay })
            .then((sport: Sport) => res.json(sport))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeSport (req: Request, res: Response) {
        Sport.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateSport (req: Request, res: Response) {
        Sport.update({name: req.body.name, isTeamPlay: req.body.isTeamPlay},{ where: { id: req.params.id } })
            .then(([number,sports]: [number,Array<Sport>]) => res.json({number,sports}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateSport (req: Request, res: Response) {
        Sport.upsert({id:req.params.id,name: req.body.name, isTeamPlay: req.body.isTeamPlay},{ returning:true})
            .then(([sport,created]: [Sport,boolean]) => res.json({sport,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }
}