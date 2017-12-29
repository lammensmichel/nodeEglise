"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const DefuntSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    epouxEpouse: {
        type: String
    },
    dateDuDeces: {
        type: String
    },
    lieuDuDeces: {
        type: String
    },
    dateDeNaissance: {
        type: String
    },
    dateDesFunerailles: {
        type: String
    },
    lieuDeDepart: {
        type: String
    },
    heureDeDepart: {
        type: String
    },
    egliseDe: {
        type: String
    },
    heureDeLaMesse: {
        type: String
    },
    crematorium: {
        type: String
    },
    heureCrematorium: {
        type: String
    },
    cimetiere: {
        type: String
    },
    heureCimetiere: {
        type: String
    }
}, { timestamps: true });
const Defunt = mongoose.model("Defunt", DefuntSchema);
exports.default = Defunt;
//# sourceMappingURL=defunt.js.map