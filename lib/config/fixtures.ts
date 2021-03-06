import { Animal } from "../models/animal.model"
import * as animals from '../datas/animal';
import * as animes from '../datas/anime';
import { Anime } from "../models/anime.model";
import { AstrologicalSign } from "../models/astrologicalSign.model";
import * as astrologicalsigns from '../datas/astrologicalSign';
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
import * as filmtypes from '../datas/filmType';
import { Food } from "../models/food.model";
import * as foods from '../datas/food';
import { MusicType } from "../models/musicType.model";
import * as musictypes from '../datas/musicType';
import { Sport } from "../models/sport.model";
import * as sports from "../datas/sport";
import { Videogame } from "../models/videogame.model";
import * as videogames from '../datas/videoGame';
import * as users from "../datas/users";
import { User} from "../models/user.model"
import * as bcrypt from "bcrypt";
import { UserAnimal } from "../models/user_animal.model";
import { UserAnime } from "../models/user_anime.model";
import { UserCar } from "../models/user_car.model";
import { UserDestination } from "../models/user_destination.model";
import { UserDrink } from "../models/user_drink.model";
import { UserFilmType } from "../models/user_filmtype.model";
import { UserFood } from "../models/user_food.model";
import { UserMusicType } from "../models/user_musictype.model";
import { UserSport } from "../models/user_sport.model";
import { UserVideogame } from "../models/user_videogame.model";

const saltRounds: Number = 10;
async function loadFixtures(): Promise<void>{
    try{
        
        await loadAnimals(),
        await loadAnimes(),
        await loadAstrologicalSigns(),
        await loadCars(),
        await loadDestinations(),
        await loadDrinks(),
        await loadFilmTypes(),
        await loadFoods(),
        await loadMusicTypes(),
        await loadSports(),
        await loadVideogames(),
        await loadRegions(),
        await loadCities();
        await loadUsers();

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
            const contents = await Food.create({ name: food.name })
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
async function loadUsers(): Promise<void>{
    for (const user of users){

        await bcrypt.hash(user.password, saltRounds)
        .then( (hash :String) => {
            const contents = User.create({ 
                email: user.email,
                password: hash,
                first_name: user.first_name,
                last_name: user.last_name,
                tel_number: user.tel_number,
                age: user.age,
                address: user.adress,
                city_id: user.city_id,
                astrologicalsign_id:user.astrologicalsign_id
            })
            .then((userCreated: User) => {
                user.animals.forEach((element: number) => {
                    UserAnimal.create({user_id: userCreated.id, animal_id: element})
                });
                user.animes.forEach((element: number) => {
                    UserAnime.create({user_id: userCreated.id, anime_id: element})
                });
                user.cars.forEach((element: number) => {
                    UserCar.create({user_id: userCreated.id, car_id: element})
                });
                user.destinations.forEach((element: number) => {
                    UserDestination.create({user_id: userCreated.id, destination_id: element})
                });
                user.drinks.forEach((element: number) => {
                    UserDrink.create({user_id: userCreated.id, drink_id: element})
                });
                user.filmtypes.forEach((element: number) => {
                    UserFilmType.create({user_id: userCreated.id, filmtype_id: element})
                });
                user.foods.forEach((element: number) => {
                    UserFood.create({user_id: userCreated.id, food_id: element})
                });
                user.musictypes.forEach((element: number) => {
                    UserMusicType.create({user_id: userCreated.id, musictype_id: element})
                });
                user.sports.forEach((element: number) => {
                    UserSport.create({user_id: userCreated.id, sport_id: element})
                });
                user.videogames.forEach((element: number) => {
                    UserVideogame.create({user_id: userCreated.id, videogame_id: element})
                });
                console.log(userCreated.id + " : " + userCreated.first_name);
            })
            .catch((err: Error) => console.log(err))
            })
        .catch((err :Error) => {
            console.error(err);
        });
    }
}

loadFixtures();