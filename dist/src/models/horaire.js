"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const lieu_1 = require("./lieu");
const HoraireSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    lieu: {
        type: lieu_1.Lieuschema
    }
}, { timestamps: true });
const Horaire = mongoose.model("horaire", HoraireSchema);
exports.default = Horaire;
//# sourceMappingURL=horaire.js.map