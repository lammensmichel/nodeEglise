import * as mongoose from 'mongoose';
import { lieuModel,Lieuschema } from './lieu';
import { defuntModel, Defuntschema } from './defunt';


export type  PersonneModel = mongoose.Document & {
  _id: string,
  nom: String,
  prenom: String,
  epouxEpouse: String,
  dateDeNaissance: Date,
  lieuDeNaissance: string,
  defunt: defuntModel
}

const PersonneSchema = new mongoose.Schema({
  nom:{
    type: String
  },
  prenom:{
    type: String
  },
  epouxEpouse:{
    type: String
  },
  lieuDeNaissance:{
    type: String
  },
  dateDeNaissance:{
    type: Date
  },
  defunt:{
    type: Defuntschema
  },
}, { timestamps: true })

const  Personne = mongoose.model("personne",  PersonneSchema);
export default  Personne;