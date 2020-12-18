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
            .delete(this.animalController.removeAnimal)
            .put(this.animalController.updateOrCreateAnimal)
            .patch(this.animalController.updateAnimal)

        //-------------------

        app.route("/astrologicalSigns")
            .get(this.astrologicalSignController.getAstrologicalSigns)
            .post(this.astrologicalSignController.addAstrologicalSign)
        app.route("/astrologicalSigns/:id")
            .get(this.astrologicalSignController.getAstrologicalSign)
            .delete(this.astrologicalSignController.removeAstrologicalSign)
            .put(this.astrologicalSignController.updateOrCreateAstrologicalSign)
            .patch(this.astrologicalSignController.updateAstrologicalSign)

        //------------------

        app.route("/destinations")
            .get(this.destinationController.getDestinations)
            .post(this.destinationController.addDestination)
        app.route("/destinations/:id")
            .get(this.destinationController.getDestination)
            .delete(this.destinationController.removeDestination)
            .put(this.destinationController.updateOrCreateDestination)
            .patch(this.destinationController.updateDestination)

        //------------------

        app.route("/filmTypes")
            .get(this.filmTypeController.getFilmTypes)
            .post(this.filmTypeController.addFilmType)
        app.route("/filmTypes/:id")
            .get(this.filmTypeController.getFilmType)
            .delete(this.filmTypeController.removeFilmType)
            .put(this.filmTypeController.updateOrCreateFilmType)
            .patch(this.filmTypeController.updateFilmType)

        //------------------

        app.route("/foods")
            .get(this.foodController.getFoods)
            .post(this.foodController.addFood)
        app.route("/foods/:id")
            .get(this.foodController.getFood)
            .delete(this.foodController.removeFood)
            .put(this.foodController.updateOrCreateFood)
            .patch(this.foodController.updateFood)

        //------------------

        app.route("/musicTypes")
            .get(this.musicTypeController.getMusicTypes)
            .post(this.musicTypeController.addMusicType)
        app.route("/musicTypes/:id")
            .get(this.musicTypeController.getMusicType)
            .delete(this.musicTypeController.removeMusicType)
            .put(this.musicTypeController.updateOrCreateMusicType)
            .patch(this.musicTypeController.updateMusicType)

        //------------------

        app.route("/regions")
            .get(this.regionController.getRegions)
            .post(this.regionController.addRegion)
        app.route("/regions/:id")
            .get(this.regionController.getRegion)
            .delete(this.regionController.removeRegion)
            .put(this.regionController.updateOrCreateRegion)
            .patch(this.regionController.updateRegion)

        //------------------

        app.route("/videoGames")
            .get(this.videoGameController.getVideoGames)
            .post(this.videoGameController.addVideoGame)
        app.route("/videoGames/:id")
            .get(this.videoGameController.getVideoGame)
            .delete(this.videoGameController.removeVideoGame)
            .put(this.videoGameController.updateOrCreateVideogame)
            .patch(this.videoGameController.updateVideogame)

        //------------------

        app.route("/animes")
            .get(this.animeController.getAnimes)
            .post(this.animeController.addAnime)
        app.route("/animes/:id")
            .get(this.animeController.getAnime)
            .delete(this.animeController.removeAnime)
            .put(this.animeController.updateOrCreateAnime)
            .patch(this.animeController.updateAnime)

        //------------------

        app.route("/cars")
            .get(this.carController.getCars)
            .post(this.carController.addCar)
        app.route("/cars/:id")
            .get(this.carController.getCar)
            .delete(this.carController.removeCar)
            .put(this.carController.updateOrCreateCar)
            .patch(this.carController.updateCar)

        //------------------

        app.route("/drinks")
            .get(this.drinkController.getDrinks)
            .post(this.drinkController.addDrink)
        app.route("/drinks/:id")
            .get(this.drinkController.getDrink)
            .delete(this.drinkController.removeDrink)
            .put(this.drinkController.updateOrCreateDrink)
            .patch(this.drinkController.updateDrink)

        //------------------

        app.route("/sports")
            .get(this.sportController.getSports)
            .post(this.sportController.addSport)
        app.route("/sports/:id")
            .get(this.sportController.getSport)
            .delete(this.sportController.removeSport)
            .put(this.sportController.updateOrCreateSport)
            .patch(this.sportController.updateSport)

        //------------------

        app.route("/users")
            .get(this.userController.getUsers)
            .post(this.userController.addUser)
        app.route("/users/:id")
            .get(this.userController.getUser)
            .delete(this.userController.removeUser)
            .put(this.userController.updateOrCreateUser)
            .patch(this.userController.updateUser)

        //------------------

        app.route("/cities")
            .get(this.cityController.getCitys)
            .post(this.cityController.addCity)
        app.route("/cities/:id")
            .get(this.cityController.getCity)
            .delete(this.cityController.removeCity)
            .put(this.cityController.updateOrCreateCity)
            .patch(this.cityController.updateCity)

    }

}