import { Animal } from "../models/animal.model"
import * as animals from '../datas/animal';
import * as anime from '../datas/anime';
import { Anime } from "../models/anime.model";
import { AstrologicalSign } from "../models/astrologicalSign.model";
import * as astrologicalsigns from '../datas/astrologicalsign';
import { Car } from "../models/car.model";
// import * as cars from '../datas/car';
import { City } from "../models/city.model";
import * as cities from '../datas/city';
import { Region } from "../models/region.model";
import * as regions from '../datas/region';
import { Destination } from "../models/destination.model";
import * as destinations from '../datas/destination';
import { Drink } from "../models/drink.model";
import * as drinks from '../datas/drink';
import { FilmType } from "../models/filmType.model";
import * as filmtypes from '../datas/filmtype';
import { Food } from "../models/food.model";
import * as foods from '../datas/food';
import { MusicType } from "../models/musicType.model";
import * as musictypes from '../datas/musictype';
import { Sport } from "../models/sport.model";
import * as sports from "../datas/sport";
import { Videogame } from "../models/videogame.model";
import * as videogames from '../datas/videogame';

function loadFixtures(): void{
    try{
        loadAnimals();
        loadAnimes();
        loadAstrologicalSigns();
        loadRegions();
        loadCities();
        // loadCars();
        loadDestinations();
        loadDrinks();
        loadFilmTypes();
        loadFoods();
        loadMusicTypes();
        loadSports();
        loadVideogames();
    }catch(err: any){
        throw new Error(err);
    }
}

function loadAnimals(): void{
    animals.forEach(animal => {
        Animal.create({ name: animal.name })
            .then((animal: Animal) => console.log(animal.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadAnimes(): void{
    anime.forEach(anime => {
        Anime.create({ name: anime.name })
            .then((anime: Anime) => console.log(anime.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadAstrologicalSigns(): void{
    astrologicalsigns.forEach(astrologicalsign => {
        AstrologicalSign.create({ name: astrologicalsign.name })
            .then((astrologicalsign: AstrologicalSign) => console.log(astrologicalsign.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadRegions(): void{
    regions.forEach(region => {
        Region.create({ name: region.name })
            .then((region: Region) => console.log(region.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadCities(): void{
    cities.forEach(city => {
        City.create({ name: city.name, region_id: city.region_id })
            .then((city: City) => console.log(city.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
// function loadCars(){
//     cars.forEach(car => {
//         Car.create({ name: car.name, brand: car.brand })
//             .then((car: Car) => console.log(car.id))
//             .catch((err: Error) => console.error(err))
//         ;
//     });
// }
function loadDestinations(): void{
    destinations.forEach(destination => {
        Destination.create({ name: destination.name })
            .then((destination: Destination) => console.log(destination.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadDrinks(): void{
    drinks.forEach(drink => {
        Drink.create({ name: drink.name, isAlcoholised: drink.isAlcoholised })
            .then((drink: Drink) => console.log(drink.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadFilmTypes(): void{
    filmtypes.forEach(filmtype => {
        FilmType.create({ name: filmtype.name })
            .then((filmtype: FilmType) => console.log(filmtype.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadFoods(): void{
    foods.forEach(food => {
        Food.create({ name: food.name })
            .then((food: Food) => console.log(food.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadMusicTypes(): void{
    musictypes.forEach(musictype => {
        MusicType.create({ name: musictype.name })
            .then((musictype: MusicType) => console.log(musictype.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadSports(): void{
    sports.forEach(sport => {
        Sport.create({ name: sport.name, isTeamPlay: sport.team_play })
            .then((sport: Sport) => console.log(sport.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadVideogames(): void{
    videogames.forEach(videogame => {
        Videogame.create({ name: videogame.name })
            .then((videogame: Videogame) => console.log(videogame.id))
            .catch((err: Error) => console.error(err))
        ;
    });
}
function loadUsers(): void{

}

loadFixtures();