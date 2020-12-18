import { Request, Response } from "express";
import { City } from '../models/city.model';

export class CityController {

    public getCitys (req: Request, res: Response) {
        City.findAll<City>({
            include: [
                City.associations.region,
                City.associations.users
            ]
        })
        .then((cities: Array<City>) => res.json(cities))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getCity (req: Request, res: Response) {
        City.findOne({ 
            where: { id: req.params.id },
            include:[City.associations.users]
         })
            .then((city: City) => res.json(city))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addCity (req: Request, res: Response) {
        City.create({ name: req.body.name, region_id: req.body.region_id })
        .then((city: City) => res.json(city))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public removeCity (req: Request, res: Response) {
        City.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateCity (req: Request, res: Response) {
        City.update({name: req.body.name, region_id: req.body.region_id},{ where: { id: req.params.id } })
            .then(([number,cities]: [number,Array<City>]) => res.json({number,cities}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateCity (req: Request, res: Response) {
        City.upsert({id:req.params.id,name: req.body.name, region_id: req.body.region_id},{ returning:true})
            .then(([city,created]: [City,boolean]) => res.json({city,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}