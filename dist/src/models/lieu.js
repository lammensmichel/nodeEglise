"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var Typelieu;
(function (Typelieu) {
    Typelieu["eglise"] = "eglise";
    Typelieu["crematorium"] = "crematorium";
    Typelieu["cimetiere"] = "cimetiere";
})(Typelieu || (Typelieu = {}));
const LieuSchema = new mongoose.Schema({
    rue: {
        type: String
    },
    numero: {
        type: String
    },
    codePostal: {
        type: String
    },
    titre: {
        type: String
    },
    typeLieu: {
        type: Typelieu
    },
}, { timestamps: true });
const Lieu = mongoose.model("Lieu", LieuSchema);
exports.default = Lieu;
exports.Lieuschema = LieuSchema;
//# sourceMappingURL=lieu.js.map