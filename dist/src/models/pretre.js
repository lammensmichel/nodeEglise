"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const PretreSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    rue: {
        type: String
    },
    numero: {
        type: String
    },
    codePostal: {
        type: String
    },
    email: {
        type: String
    },
    fix: {
        type: String
    },
    gsm: {
        type: String
    }
}, { timestamps: true });
const Pretre = mongoose.model("Pretre", PretreSchema);
exports.default = Pretre;
exports.Pretreschema = PretreSchema;
//# sourceMappingURL=pretre.js.map