import { Request, Response } from "express";
import { AstrologicalSign } from "../models/astrologicalSign.model";

export class AstrologicalSignController {

    public getAstrologicalSigns (req: Request, res: Response) {
        AstrologicalSign.findAll<AstrologicalSign>({
            include: [AstrologicalSign.associations.users]
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

}