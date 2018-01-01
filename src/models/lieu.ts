import * as mongoose from 'mongoose';

  enum Typelieu {
    eglise,
    crematorium,
    cimetiere
  }

export type lieuModel = mongoose.Document & {
  _id: string
  rue: String,
  numero: String,
  codePostal: String,
  titre: String,
  typeLieu: Typelieu
}

const LieuSchema = new mongoose.Schema({
  rue:{
    type: String
  },
  numero:{
    type: String
  },
  codePostal:{
    type: String
  },
  titre:{
    type: String
  },
  typeLieu:{
    type: Typelieu
  },

}, { timestamps: true })

const Lieu = mongoose.model("Lieu", LieuSchema);
export default Lieu;