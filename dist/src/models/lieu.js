"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var Typelieu;
(function (Typelieu) {
    Typelieu[Typelieu["eglise"] = 0] = "eglise";
    Typelieu[Typelieu["crematorium"] = 1] = "crematorium";
    Typelieu[Typelieu["cimetiere"] = 2] = "cimetiere";
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
//# sourceMappingURL=lieu.js.map