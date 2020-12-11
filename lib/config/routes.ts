import * as express from "express";
import { AnimalController } from "../controllers/animal.controller";
import { AstrologicalSignController } from "../controllers/astrologicalSign.controller";
import { DestinationController } from "../controllers/Destination.controller";
import { FilmTypeController } from "../controllers/FilmType.controller";
import { FoodController } from "../controllers/food.controller";
import { MusicTypeController } from "../controllers/musicType.controller";
import { RegionController } from "../controllers/region.controller";
import { VideoGameController } from "../controllers/videoGame.controller";

export class Routes {
    public app: express.Application;

    public animalController: AnimalController = new AnimalController();
    public astrologicalSignController: AstrologicalSignController = new AstrologicalSignController();
    public destinationController: DestinationController = new DestinationController();
    public filmTypeController: FilmTypeController = new FilmTypeController();
    public foodController: FoodController = new FoodController();
    public musicTypeController: MusicTypeController = new MusicTypeController();
    public regionController: RegionController = new RegionController();
    public videoGameController: VideoGameController = new VideoGameController();

    public routes(app): void {
        //------------------

        app.route("/animals")
            .get(this.animalController.getAnimals)
            .post(this.animalController.addAnimal)
        app.route("/animals/:id")
            .get(this.animalController.getAnimal)
            .post(this.animalController.removeAnimal)

        //-------------------

        app.route("/astrologicalSigns")
            .get(this.astrologicalSignController.getAstrologicalSigns)
            .post(this.astrologicalSignController.addAstrologicalSign)
        app.route("/astrologicalSigns/:id")
            .get(this.astrologicalSignController.getAstrologicalSign)
            .post(this.astrologicalSignController.removeAstrologicalSign)

        //------------------

        app.route("/destinations")
            .get(this.destinationController.getDestinations)
            .post(this.destinationController.addDestination)
        app.route("/destinations/:id")
            .get(this.destinationController.getDestination)
            .post(this.destinationController.removeDestination)

        //------------------

        app.route("/filmTypes")
            .get(this.filmTypeController.getFilmTypes)
            .post(this.filmTypeController.addFilmType)
        app.route("/filmTypes/:id")
            .get(this.filmTypeController.getFilmType)
            .post(this.filmTypeController.removeFilmType)

        //------------------

        app.route("/foods")
            .get(this.foodController.getFoods)
            .post(this.foodController.addFood)
        app.route("/foods/:id")
            .get(this.foodController.getFood)
            .post(this.foodController.removeFood)

        //------------------

        app.route("/musicTypes")
            .get(this.musicTypeController.getMusicTypes)
            .post(this.musicTypeController.addMusicType)
        app.route("/musicTypes/:id")
            .get(this.musicTypeController.getMusicType)
            .post(this.musicTypeController.removeMusicType)

        //------------------

        app.route("/regions")
            .get(this.regionController.getRegions)
            .post(this.regionController.addRegion)
        app.route("/regions/:id")
            .get(this.regionController.getRegion)
            .post(this.regionController.removeRegion)

        //------------------

        app.route("/videoGames")
            .get(this.videoGameController.getVideoGames)
            .post(this.videoGameController.addVideoGame)
        app.route("/videoGames/:id")
            .get(this.videoGameController.getVideoGame)
            .post(this.videoGameController.removeVideoGame)
    }

}