"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
const express = require("express");
const body_parser_1 = require("body-parser");
// Import WelcomeController from controllers entry point
const controllers_1 = require("./controllers");
// Create a new express application instance
const app = express();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.json());
app.use('/Defunt', controllers_1.DefuntController);
app.use('/Lieu', controllers_1.LieuController);
app.use('/Horaire', controllers_1.horaireController);
app.use('/Personne', controllers_1.PersonneController);
exports.application = app;
//# sourceMappingURL=server.js.map