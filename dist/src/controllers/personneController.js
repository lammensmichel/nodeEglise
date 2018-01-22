"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personne_1 = require("../models/personne");
// Assign router to the express.Router() instance
const router = express_1.Router();
//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let personneReq = req.body;
    let personne = new personne_1.default(personneReq);
    let personneSave = yield personne.save().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(personneSave);
})).get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const personnes = yield personne_1.default.find().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(personnes);
})).get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const personne = yield personne_1.default.findById(id).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(personne);
})).post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const personneReq = req.body;
        let personne = yield personne_1.default.findById(personneReq._id);
        if (personne === null)
            res.json({ 'err': 'id not found' });
        else {
            personne.set(personneReq);
            let personneSave = yield personne.save();
            res.json(personneSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
})).delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const personneReq = req.body;
        let personneDel = yield personne_1.default.remove(personneReq);
        res.json(personneDel);
    }
    catch (error) {
        res.json({ 'err': error });
    }
})).delete('/Defunt', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const personneReq = req.body;
        let personne = yield personne_1.default.findById(personneReq._id);
        if (personne === null)
            res.json({ 'err': 'id not found' });
        else {
            personne.set({ defunt: null });
            let personneSave = yield personne.save();
            res.json(personneSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.PersonneController = router;
//# sourceMappingURL=personneController.js.map