"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const DefuntSchema = new mongoose.Schema({
    dateDuDeces: {
        type: Date
    },
    lieuDuDeces: {
        type: String
    },
    dateDesFunerailles: {
        type: Date
    },
    lieuDeDepart: {
        type: String
    },
    heureDeDepart: {
        type: Date
    },
    egliseDe: {
        type: String
    },
    heureDeLaMesse: {
        type: Date
    },
    crematorium: {
        type: String
    },
    heureCrematorium: {
        type: Date
    },
    cimetiere: {
        type: String
    },
    heureCimetiere: {
        type: Date
    }
}, { timestamps: true });
const Defunt = mongoose.model("Defunt", DefuntSchema);
exports.default = Defunt;
exports.Defuntschema = DefuntSchema;
//# sourceMappingURL=defunt.js.map