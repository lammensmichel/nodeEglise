import * as mongoose from 'mongoose';
import { lieuModel,Lieuschema } from './lieu';
import { pretreModel, Pretreschema } from './pretre';


export type horaireModel = mongoose.Document & {
  _id: string,
  idGoogle:string,
  date: Date,
  lieu: lieuModel,
  pretre: pretreModel
}

const HoraireSchema = new mongoose.Schema({
  idGoogle:{
    type: String
  },
  date:{
    type: Date
  },
  lieu:{
    type: Lieuschema
  },
  pretre:{
    type: Pretreschema
  }

}, { timestamps: true })

const Horaire = mongoose.model("horaire", HoraireSchema);
export default Horaire;