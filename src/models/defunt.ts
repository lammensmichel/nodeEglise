import * as mongoose from 'mongoose';


export type defuntModel = mongoose.Document & {
  _id: string
  nom: String,
  prenom: String,
  epouxEpouse: String,
  dateDuDeces: String,
  lieuDuDeces: String,
  dateDeNaissance: String,
  dateDesFunerailles: String,
  lieuDeDepart: String,
  heureDeDepart: String,
  egliseDe: String,
  heureDeLaMesse: String,
  crematorium: String,
  heureCrematorium: String,
  cimetiere: String,
  heureCimetiere: String

}

const DefuntSchema = new mongoose.Schema({
  nom:{
    type: String
  },
  prenom:{
    type: String
  },
  epouxEpouse:{
    type: String
  },
  dateDuDeces:{
    type: String
  },
  lieuDuDeces:{
    type: String
  },
  dateDeNaissance:{
    type: String
  },
  dateDesFunerailles:{
    type: String
  },
  lieuDeDepart:{
    type: String
  },
  heureDeDepart:{
    type: String
  },
  egliseDe:{
    type: String
  },
  heureDeLaMesse:{
    type: String
  },
  crematorium:{
    type: String
  },
  heureCrematorium:{
    type: String
  },
  cimetiere:{
    type: String
  },
  heureCimetiere:{
    type: String
  }
}, { timestamps: true })

const Defunt = mongoose.model("Defunt", DefuntSchema);
export default Defunt;