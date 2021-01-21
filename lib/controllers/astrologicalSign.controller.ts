import { Request, Response } from "express";
import { AstrologicalSign } from "../models/astrologicalSign.model";
import { Op } from "sequelize";

export class AstrologicalSignController {

    public async getAstrologicalSigns (req: Request, res: Response) {

        const count : number= await AstrologicalSign.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0
        const search : string = req.query.name as string || ""

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        AstrologicalSign.findAll<AstrologicalSign>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
            include: [AstrologicalSign.associations.users],
            where:{
                "name":{
                    [Op.substring]:search
                }
            }
        })
            .then((astrologicalSigns: Array<AstrologicalSign>) => res.json(astrologicalSigns))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getAstrologicalSign (req: Request, res: Response) {
        AstrologicalSign.findOne({ 
            where: { id: req.params.id },
            include:[AstrologicalSign.associations.users]
         })
            .then((astrologicalSign: AstrologicalSign) => res.json(astrologicalSign))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addAstrologicalSign (req: Request, res: Response) {
        AstrologicalSign.create({ name: req.body.name })
        .then((astrologicalSign: AstrologicalSign) => res.json(astrologicalSign))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public removeAstrologicalSign (req: Request, res: Response) {
        AstrologicalSign.destroy({ where: { id: req.params.id } })
        .then((value: number) => res.json(value))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public updateAstrologicalSign (req: Request, res: Response) {
        AstrologicalSign.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,astrologicalSigns]: [number,Array<AstrologicalSign>]) => res.json({number,astrologicalSigns}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateAstrologicalSign (req: Request, res: Response) {
        AstrologicalSign.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([astrologicalSign,created]: [AstrologicalSign,boolean]) => res.json({astrologicalSign,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}