import * as express from "express";
import { AnimalController } from "../controllers/animal.controller";
import { AstrologicalSignController } from "../controllers/astrologicalSign.controller";

export class Routes {
    public app: express.Application;

    public animalController: AnimalController = new AnimalController();
    public astrologicalSignController: AstrologicalSignController = new AstrologicalSignController();

    public routes(app): void {
        //------------------

        app.route("/animal")
            .get(this.animalController.getAnimals)
            .post(this.animalController.addAnimal);
        app.route("/animal/:id")
            .get(this.animalController.getAnimal)
            .post(this.animalController.removeAnimal);

        //-------------------

        app.route("/astrologicalSign")
            .get(this.astrologicalSignController.getAstrologicalSigns)
            .post(this.astrologicalSignController.addAstrologicalSign)
        app.route("/astrologicalSign/:id")
            .get(this.astrologicalSignController.getAstrologicalSign)
            .post(this.astrologicalSignController.removeAstrologicalSign);

        //------------------
    }

}