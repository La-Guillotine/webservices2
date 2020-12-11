import * as express from "express";
import { AnimalController } from "../controllers/animal.controller";
import { AstrologicalSignController } from "../controllers/astrologicalSign.controller";
import { DestinationController } from "../controllers/Destination.controller";
import { FilmTypeController } from "../controllers/FilmType.controller";
import { FoodController } from "../controllers/food.controller";
import { MusicTypeController } from "../controllers/musicType.controller";
import { RegionController } from "../controllers/region.controller";
import { VideoGameController } from "../controllers/videoGame.controller";
import { AnimeController } from "../controllers/anime.controller";
import { CarController } from "../controllers/car.controller";
import { DrinkController } from "../controllers/drink.controller";
import { SportController } from "../controllers/sport.controller";
import { UserController } from "../controllers/user.controller";
import { CityController } from "../controllers/city.controller";

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
    public animeController: AnimeController = new AnimeController();
    public carController: CarController = new CarController();
    public drinkController: DrinkController = new DrinkController();
    public sportController: SportController = new SportController();
    public userController: UserController = new UserController();
    public cityController: CityController = new CityController();

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

        //------------------

        app.route("/animes")
            .get(this.animeController.getAnimes)
            .post(this.animeController.addAnime)
        app.route("/animes/:id")
            .get(this.animeController.getAnime)
            .post(this.animeController.removeAnime)

        //------------------

        app.route("/cars")
            .get(this.carController.getCars)
            .post(this.carController.addCar)
        app.route("/cars/:id")
            .get(this.carController.getCar)
            .post(this.carController.removeCar)

        //------------------

        app.route("/drinks")
            .get(this.drinkController.getDrinks)
            .post(this.drinkController.addDrink)
        app.route("/drinks/:id")
            .get(this.drinkController.getDrink)
            .post(this.drinkController.removeDrink)

        //------------------

        app.route("/sports")
            .get(this.sportController.getSports)
            .post(this.sportController.addSport)
        app.route("/sports/:id")
            .get(this.sportController.getSport)
            .post(this.sportController.removeSport)

        //------------------

        app.route("/users")
            .get(this.userController.getUsers)
            .post(this.userController.addUser)
        app.route("/users/:id")
            .get(this.userController.getUser)
            .post(this.userController.removeUser)

        //------------------

        app.route("/cities")
            .get(this.cityController.getCitys)
            .post(this.cityController.addCity)
        app.route("/cities/:id")
            .get(this.cityController.getCity)
            .post(this.cityController.removeCity)


    }

}