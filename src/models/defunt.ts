import * as mongoose from 'mongoose';


export type defuntModel = mongoose.Document & {
  _id: string,
  dateDuDeces: Date,
  lieuDuDeces: String,
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
  dateDuDeces:{
    type: Date
  },
  lieuDuDeces:{
    type: String
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
export const Defuntschema: mongoose.Schema = DefuntSchema;