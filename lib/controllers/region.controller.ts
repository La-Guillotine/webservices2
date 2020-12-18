import { Request, Response } from "express";
import { Region } from "../models/region.model";


export class RegionController {

    public getRegions (req: Request, res: Response) {
        Region.findAll<Region>({
            include: [Region.associations.cities]
        })
        .then((regions: Array<Region>) => res.json(regions))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getRegion (req: Request, res: Response) {
        Region.findOne({ where: { id: req.params.id } })
            .then((region: Region) => res.json(region))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addRegion (req: Request, res: Response) {
        Region.create({ name: req.body.name })
            .then((region: Region) => res.json(region))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeRegion (req: Request, res: Response) {
        Region.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateRegion (req: Request, res: Response) {
        Region.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,regions]: [number,Array<Region>]) => res.json({number,regions}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateRegion (req: Request, res: Response) {
        Region.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([region,created]: [Region,boolean]) => res.json({region,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}