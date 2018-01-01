import * as mongoose from 'mongoose';
import { lieuModel,Lieuschema } from './lieu';


export type horaireModel = mongoose.Document & {
  _id: string
  date: Date,
  lieu: lieuModel
}

const HoraireSchema = new mongoose.Schema({
  date:{
    type: Date
  },
  lieu:{
    type: Lieuschema
  }

}, { timestamps: true })

const Horaire = mongoose.model("horaire", HoraireSchema);
export default Horaire;