import { Request, Response } from "express";
import { Region } from "../models/region.model";
import { Op } from "sequelize";

export class RegionController {

    public async getRegions (req: Request, res: Response) {

        const count : number= await Region.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0
        const search : string = req.query.name as string || ""

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        Region.findAll<Region>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
            include: [Region.associations.cities],
            where:{
                "name":{
                    [Op.substring]:search
                }
            }
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