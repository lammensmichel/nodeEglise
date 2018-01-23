import * as mongoose from 'mongoose';

export type pretreModel = mongoose.Document & {
  _id: string,
  nom: string,
  prenom: string,
  rue: String,
  numero: String,
  codePostal: String,
  email:string,
  fix:string,
  gsm:string
}

const PretreSchema : mongoose.Schema = new mongoose.Schema({
  nom:{
    type: String
  },
  prenom:{
    type: String
  },
  rue:{
    type: String
  },
  numero:{
    type: String
  },
  codePostal:{
    type: String
  },
  email:{
    type: String
  },
  fix:{
    type: String
  },
  gsm:{
    type: String
  }
}, { timestamps: true })


const Pretre = mongoose.model("Pretre", PretreSchema);
export default Pretre;
export const Pretreschema: mongoose.Schema = PretreSchema;
