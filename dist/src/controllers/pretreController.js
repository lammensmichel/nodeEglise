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
const pretre_1 = require("../models/pretre");
// Assign router to the express.Router() instance
const router = express_1.Router();
//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE
router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let pretreReq = req.body;
    let pretre = new pretre_1.default(pretreReq);
    let pretreSave = yield pretre.save().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(pretreSave);
})).get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const pretre = yield pretre_1.default.find().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(pretre);
})).get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const pretre = yield pretre_1.default.findById(id).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(pretre);
})).post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const pretreReq = req.body;
        let pretre = yield pretre_1.default.findById(pretreReq._id);
        if (pretre === null)
            res.json({ 'err': 'id not found' });
        else {
            pretre.set(pretreReq);
            let pretreSave = yield pretre.save();
            res.json(pretreSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
})).delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const pretreReq = req.body;
        let pretreDel = yield pretre_1.default.remove(pretreReq);
        res.json(pretreDel);
    }
    catch (error) {
        res.json({ 'err': error });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.PretreController = router;
//# sourceMappingURL=pretreController.js.map