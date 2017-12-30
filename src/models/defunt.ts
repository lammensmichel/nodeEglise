import * as mongoose from 'mongoose';


export type defuntModel = mongoose.Document & {
  _id: string
  nom: String,
  prenom: String,
  epouxEpouse: String,
  dateDuDeces: Date,
  lieuDuDeces: String,
  dateDeNaissance: Date,
  dateDesFunerailles: Date,
  lieuDeDepart: String,
  heureDeDepart: Date,
  egliseDe: String,
  heureDeLaMesse: Date,
  crematorium: String,
  heureCrematorium: Date,
  cimetiere: String,
  heureCimetiere: Date

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
    type: Date
  },
  lieuDuDeces:{
    type: String
  },
  dateDeNaissance:{
    type: Date
  },
  dateDesFunerailles:{
    type: Date
  },
  lieuDeDepart:{
    type: String
  },
  heureDeDepart:{
    type: Date
  },
  egliseDe:{
    type: String
  },
  heureDeLaMesse:{
    type: Date
  },
  crematorium:{
    type: String
  },
  heureCrematorium:{
    type: Date
  },
  cimetiere:{
    type: String
  },
  heureCimetiere:{
    type: Date
  }
}, { timestamps: true })

const Defunt = mongoose.model("Defunt", DefuntSchema);
export default Defunt;