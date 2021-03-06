import { Request, Response } from "express";
import { Animal } from "../models/animal.model";
import { Op } from "sequelize";

export class AnimalController {

    public async getAnimals (req: Request, res: Response) {
        const count : number= await Animal.count()
        const element : number | number = parseInt(req.query.element as string) || count
        const page : number = parseInt(req.query.page as string) || 0
        const search : string = req.query.name as string || ""

        let jump : number 

        if(page == 0){
            jump =0
        }else{
            jump = element * (page-1)
        }

        Animal.findAll<Animal>({
            order: [
                ['id', 'ASC']
            ],
            offset:jump,
            limit:element,
            include: [Animal.associations.users],
            where:{
                "name":{
                    [Op.substring]:search
                }
            }
        })
            .then((animals: Array<Animal>) => res.json(animals))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public getAnimal (req: Request, res: Response) {
        Animal.findOne({ 
            where: { id: req.params.id },
            include:[Animal.associations.users]
         })
            .then((animal: Animal) => res.json(animal))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public addAnimal (req: Request, res: Response) {
        Animal.create({ name: req.body.name })
            .then((animal: Animal) => res.json(animal))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public removeAnimal (req: Request, res: Response) {
        Animal.destroy({ where: { id: req.params.id } })
            .then((value: number) => res.json(value))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateAnimal (req: Request, res: Response) {
        Animal.update({name: req.body.name},{ where: { id: req.params.id } })
            .then(([number,animals]: [number,Array<Animal>]) => res.json({number,animals}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

    public updateOrCreateAnimal (req: Request, res: Response) {
        Animal.upsert({id:req.params.id,name: req.body.name},{ returning:true})
            .then(([animal,created]: [Animal,boolean]) => res.json({animal,created}))
            .catch((err: Error) => res.status(500).json(err))
        ;
    }

}