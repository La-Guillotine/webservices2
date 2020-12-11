import { Request, Response } from "express";
import { City } from '../models/city.model';

export class CityController {

    public getCitys (req: Request, res: Response) {
        City.findAll<City>({
            include: [City.associations.region]
        })
        .then((cities: Array<City>) => res.json(cities))
        .catch((err: Error) => res.status(500).json(err))
    ;
    }

    public getCity (req: Request, res: Response) {

    }

    public addCity (req: Request, res: Response) {

    }

    public removeCity (req: Request, res: Response) {

    }

}