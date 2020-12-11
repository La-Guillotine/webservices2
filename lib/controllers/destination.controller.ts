import { Request, Response } from "express";
import { Destination } from "../models/destination.model";


export class DestinationController {

    public getDestinations (req: Request, res: Response) {
        Destination.findAll<Destination>({
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

}


