// lib/config/routes.ts
import { Request, Response } from "express";
import { AnimalController } from "../controllers/animalController";

export class Routes {
  public animalController: AnimalController = new AnimalController();

  public routes(app): void {
    app.route("/animal").get(this.animalController);
  }
}