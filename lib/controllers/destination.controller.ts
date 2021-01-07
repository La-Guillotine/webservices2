import { Request, Response } from "express";
import { Destination } from "../models/destination.model";


export class DestinationController {

    public getDestinations (req: Request, res: Response) {
        Destination.findAll<Destination>({
            order: [
                ['id', 'ASC']
            ],
            include:[Destination.associations.users]
        })
            .then((destinations: Array<Destination>) => res.json(destinations))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getDestination (req: Request, res: Response) {
        Destination.findOne({ 
            where: { id: req.params.id },
            include:[Destination.associations.users]
         })
            .then((destination: Destination) => res.json(destination))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addDestination (req: Request, res: Response) {
        Destination.create({ name: req.body.name })
            .then((destination: Destination) => res.json(destination))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeDestination (req: Request, res: Response) {
        Destination.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateDestination (req: Request, res: Response) {
        Destination.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,destinations]: [number,Array<Destination>]) => res.json({number,destinations}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateDestination (req: Request, res: Response) {
        Destination.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([destination,created]: [Destination,boolean]) => res.json({destination,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}


