import { Request, Response } from "express";
import { Car } from "../models/car.model";


export class CarController {

    public getCars (req: Request, res: Response) {
        Car.findAll<Car>({
            include:[Car.associations.users]
        })
            .then((cars: Array<Car>) => res.json(cars))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getCar (req: Request, res: Response) {
        Car.findOne({ 
            where: { id: req.params.id },
            include:[Car.associations.users]
         })
            .then((car: Car) => res.json(car))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addCar (req: Request, res: Response) {
        Car.create({ name: req.body.name,brand: req.body.brand })
            .then((car: Car) => res.json(car))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeCar (req: Request, res: Response) {
        Car.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateCar (req: Request, res: Response) {
        Car.update({name: req.body.name, brand: req.body.brand},{ where: { id: req.params.id } })
            .then(([number,cars]: [number,Array<Car>]) => res.json({number,cars}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateCar (req: Request, res: Response) {
        Car.upsert({id:req.params.id,name: req.body.name, brand: req.body.brand},{ returning:true})
            .then(([car,created]: [Car,boolean]) => res.json({car,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}