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
const lieu_1 = require("../models/lieu");
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
    let lieuReq = req.body;
    let lieu = new lieu_1.default(lieuReq);
    let lieuSave = yield lieu.save().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(lieuSave);
})).get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const lieux = yield lieu_1.default.find().catch((err) => {
        res.json({ 'err': err });
    });
    res.json(lieux);
})).get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { id } = req.params;
    const lieu = yield lieu_1.default.findById(id).catch((err) => {
        res.json({ 'err': err });
    });
    res.json(lieu);
})).post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const lieuReq = req.body;
        let lieu = yield lieu_1.default.findById(lieuReq._id);
        if (lieu === null)
            res.json({ 'err': 'id not found' });
        else {
            lieu.set(lieuReq);
            let lieuSave = yield lieu.save();
            res.json(lieuSave);
        }
    }
    catch (error) {
        res.json({ 'err': error });
    }
})).delete('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const lieuReq = req.body;
        let lieuDel = yield lieu_1.default.remove(lieuReq);
        res.json(lieuDel);
    }
    catch (error) {
        res.json({ 'err': error });
    }
}));
// Export the express.Router() instance to be used by server.ts
exports.LieuController = router;
//# sourceMappingURL=lieuController.js.map