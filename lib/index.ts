// lib/app.ts
import * as express from "express";
// import * as bodyParser from "body-parser";
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';
import { Routes } from "./config/routes";
require('dotenv').config()

class App {
  public app: express.Application;
  public router: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.router.routes(this.app);
  }

  private config(): void {
    this.app.use(cors())                                 // Activation de CORS
    this.app.use(express.json())                         // Activation du raw (json)
    this.app.use(express.urlencoded({ extended: true })) // Activation de x-wwww-form-urlencoded

    this.app.listen(process.env.PORT, () => {
        console.log("Fonctionne sur le port "+process.env.PORT)
      })
  }
}

export default new App().app;