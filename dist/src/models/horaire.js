"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const lieu_1 = require("./lieu");
const pretre_1 = require("./pretre");
const HoraireSchema = new mongoose.Schema({
    idGoogle: {
        type: String
    },
    date: {
        type: Date
    },
    lieu: {
        type: lieu_1.Lieuschema
    },
    pretre: {
        type: pretre_1.Pretreschema
    }
}, { timestamps: true });
const Horaire = mongoose.model("horaire", HoraireSchema);
exports.default = Horaire;
//# sourceMappingURL=horaire.js.map