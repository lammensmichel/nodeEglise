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
const defunt_1 = require("../models/defunt");
// Assign router to the express.Router() instance
const router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE
router.put('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let defuntReq = req.body;
    let defunt = new defunt_1.default(defuntReq);
    let defuntSave = yield defunt.save().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(defuntSave);
})).get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const defunts = yield defunt_1.default.find().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(defunts);
})).get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const defunt = yield defunt_1.default.findById(id).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(defunt);
})).post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const defuntReq = req.body;
        let defunt = yield defunt_1.default.findById(defuntReq._id);
        if (defunt === null)
            res.json({ 'err': 'id not found' });
        else {
            defunt.set(defuntReq);
            let defuntSave = yield defunt.save();
            res.json(defuntSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.DefuntController = router;
//# sourceMappingURL=DefuntController.js.map