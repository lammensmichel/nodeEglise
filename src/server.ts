// Import everything from express and assign it to the express variable
import * as express from 'express';
import {urlencoded, json} from 'body-parser';

// Import WelcomeController from controllers entry point
import {DefuntController} from './controllers';
import { LieuController } from './controllers/lieuController';
import { horaireController } from './controllers/horaireController';

// Create a new express application instance
const app: express.Application = express();
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))

// parse application/json
app.use(json())

app.use('/Defunt', DefuntController);
app.use('/Lieu', LieuController );
app.use('/Horaire',horaireController);

export const application: express.Application = app;