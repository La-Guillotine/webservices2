import { Animal } from "../models/animal.model"
import * as animals from '../datas/animal';
import * as animes from '../datas/anime';
import { Anime } from "../models/anime.model";
import { AstrologicalSign } from "../models/astrologicalSign.model";
import * as astrologicalsigns from '../datas/astrologicalsign';
import { Car } from "../models/car.model";
import * as cars from '../datas/car';
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

async function loadFixtures(): Promise<void>{
    try{
        Promise.all([
        loadAnimals(),
        loadAnimes(),
        loadAstrologicalSigns(),
        loadCars(),
        loadDestinations(),
        loadDrinks(),
        loadFilmTypes(),
        loadFoods(),
        loadMusicTypes(),
        loadSports(),
        loadVideogames(),
        loadRegions(),
        loadCities()]);

    }catch(err: any){
        throw new Error(err);
    }
}

async function loadAnimals(): Promise<void>{

    for (const animal of animals) {
        const contents =  await Animal.create({ name: animal.name })
        .then((animal: Animal) => console.log(animal.id))
        .catch((err: Error) => console.error(err))
    
    }

}

async function loadAnimes(): Promise<void>{

    for (const anime of animes){
        const contents = await Anime.create({ name: anime.name })
                .then((anime: Anime) => console.log(anime.id))
                .catch((err: Error) => console.error(err))
            ;
    }
    
}
async function loadAstrologicalSigns(): Promise<void>{
        for (const astrologicalsign of astrologicalsigns){
            const contents = await AstrologicalSign.create({ name: astrologicalsign.name })
            .then((astrologicalsign: AstrologicalSign) => console.log(astrologicalsign.id))
            .catch((err: Error) => console.error(err))
        
        }
        
    
}
async function loadRegions(): Promise<void>{
   
        for ( const region of regions){
           const contents = await Region.create({ name: region.name })
            .then((region: Region) => console.log(region.id))
            .catch((err: Error) => console.error(err))
        }
}

async function loadCities(): Promise<void>{
    for (const city of cities){
        
            const contents = await City.create({ name: city.name, region_id: city.region_id })
                .then((city: City) => console.log(city.id))
                .catch((err: Error) => console.error(err))
            ;
        
    }
}
async function loadCars(){
    for (const car of cars){    
        const contents = await Car.create({ name: car.name, brand: car.brand })
            .then((car: Car) => console.log(car.id))
            .catch((err: Error) => console.error(err))
        ;
    }
}
async function loadDestinations(): Promise<void>{
    for (const destination of destinations){
            const contents = await Destination.create({ name: destination.name })
                .then((destination: Destination) => console.log(destination.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadDrinks(): Promise<void>{
    for (const drink of drinks){
            const contents = await Drink.create({ name: drink.name, isAlcoholised: drink.isAlcoholised })
                .then((drink: Drink) => console.log(drink.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadFilmTypes(): Promise<void>{
    for (const filmtype of filmtypes){
            const contents = await FilmType.create({ name: filmtype.name })
                .then((filmtype: FilmType) => console.log(filmtype.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadFoods(): Promise<void>{
    for (const food of foods){
            Food.create({ name: food.name })
                .then((food: Food) => console.log(food.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadMusicTypes(): Promise<void>{
    for (const musictype of musictypes){
            const contents = await MusicType.create({ name: musictype.name })
                .then((musictype: MusicType) => console.log(musictype.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadSports(): Promise<void>{
    for ( const sport of sports){
            const contents = await Sport.create({ name: sport.name, isTeamPlay: sport.team_play })
                .then((sport: Sport) => console.log(sport.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
async function loadVideogames(): Promise<void>{
    for (const videogame of videogames){
           const contents = await Videogame.create({ name: videogame.name })
                .then((videogame: Videogame) => console.log(videogame.id))
                .catch((err: Error) => console.error(err))
            ;
    }
}
function loadUsers(): void{

}

loadFixtures();