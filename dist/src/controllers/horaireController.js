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
const horaire_1 = require("../models/horaire");
// Assign router to the express.Router() instance
const router = express_1.Router();
//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE
router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let horaireReq = req.body;
    let horaire = new horaire_1.default(horaireReq);
    let horaireSave = yield horaire.save().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(horaireSave);
})).get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const horairex = yield horaire_1.default.find().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(horairex);
})).get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const horaire = yield horaire_1.default.findById(id).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(horaire);
})).get('/:startDate/:endDate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { startDate, endDate } = req.params;
    const horaire = yield horaire_1.default.find({
        date: {
            $gte: new Date(startDate),
            $lt: new Date(endDate)
        }
    }).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(horaire);
})).post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const horaireReq = req.body;
        let horaire = yield horaire_1.default.findById(horaireReq._id);
        if (horaire === null)
            res.json({ 'err': 'id not found' });
        else {
            horaire.set(horaireReq);
            let horaireSave = yield horaire.save();
            res.json(horaireSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
})).delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const horaireReq = req.body;
        let horaireDel = yield horaire_1.default.remove(horaireReq);
        res.json(horaireDel);
    }
    catch (error) {
        res.json({ 'err': error });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.horaireController = router;
//# sourceMappingURL=horaireController.js.map