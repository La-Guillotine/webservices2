import { Request, Response } from "express";
import { Sport } from "../models/sport.model";

export class SportController {

    public getSports (req: Request, res: Response) {
        Sport.findAll<Sport>({})
            .then((sports: Array<Sport>) => res.json(sports))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getSport (req: Request, res: Response) {
        Sport.findOne({ where: { id: req.params.id } })
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
}