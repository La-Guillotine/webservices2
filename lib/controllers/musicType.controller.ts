import { Request, Response } from "express";
import { MusicType } from "../models/musicType.model";


export class MusicTypeController {

    public getMusicTypes (req: Request, res: Response) {
        MusicType.findAll<MusicType>({
            include:[MusicType.associations.users]
        })
        .then((musicTypes: Array<MusicType>) => res.json(musicTypes))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getMusicType (req: Request, res: Response) {
        MusicType.findOne({ 
            where: { id: req.params.id },
            include:[MusicType.associations.users]
         })
            .then((musicType: MusicType) => res.json(musicType))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addMusicType (req: Request, res: Response) {
        MusicType.create({ name: req.body.name })
        .then((musicType: MusicType) => res.json(musicType))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public removeMusicType (req: Request, res: Response) {
        MusicType.destroy({ where: { id: req.params.id } })
        .then((value: number) => res.json(value))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public updateMusicType (req: Request, res: Response) {
        MusicType.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,musicTypes]: [number,Array<MusicType>]) => res.json({number,musicTypes}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateMusicType (req: Request, res: Response) {
        MusicType.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([musicType,created]: [MusicType,boolean]) => res.json({musicType,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}