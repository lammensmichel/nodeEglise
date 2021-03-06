"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const defunt_1 = require("./defunt");
const PersonneSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    epouxEpouse: {
        type: String
    },
    lieuDeNaissance: {
        type: String
    },
    dateDeNaissance: {
        type: Date
    },
    defunt: {
        type: defunt_1.Defuntschema
    },
}, { timestamps: true });
PersonneSchema.plugin(mongoosePaginate);
const Personne = mongoose.model("personne", PersonneSchema);
exports.default = Personne;
//# sourceMappingURL=personne.js.map