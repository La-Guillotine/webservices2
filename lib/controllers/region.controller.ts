import { Request, Response } from "express";
import { Region } from "../models/region.model";


export class RegionController {

    public getRegions (req: Request, res: Response) {
        Region.findAll<Region>({})
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

}