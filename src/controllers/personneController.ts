import { Router, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { default as Personne, PersonneModel } from "../models/personne";
import { request } from 'https';
import { json } from 'body-parser';
import { PaginateOptions } from 'mongoose';

// Assign router to the express.Router() instance
const router: Router = Router();

//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE

router.put('/', async (req: Request, res: Response) => {
     
  let personneReq: PersonneModel = req.body;
  let personne = new Personne(personneReq)
  let personneSave = await personne.save().catch((err)=>{
    res.json({'err': err});
  }) 
  res.json(personneSave);

}).get('/', async (req: Request, res: Response) => {
  let descending: boolean = true;
  let options: PaginateOptions = <PaginateOptions>{};
  let rang: string  = <string> req.headers.range ;
  if(rang){
    let [min, max] = <Array<number>> rang.split('-').map(Number);;  
    options.page = min;
    options.limit = (max-min);
    const personnes = await Personne.paginate({}, options).catch((err)=>{
      res.json({'err': err});
    }) 
    res.json(personnes);
  }else{
    const personnes = await Personne.find().catch((err)=>{
      res.json({'err': err});
    }) 
    res.json(personnes);
  }
}).get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const personne = await Personne.findById(id).catch((err)=>{
      res.json({'err': err});
    });
    res.json(personne);

}).post('/',async (req: Request, res: Response) => {
  
  try {
    const personneReq:PersonneModel = req.body;
    let personne = await Personne.findById(personneReq._id);
    if (personne === null ) res.json({'err': 'id not found'});
    else {
      personne.set(personneReq);
      let personneSave = await personne.save();
      res.json(personneSave);
    }
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/',async (req: Request, res: Response) => {
  
  try {
    const personneReq: PersonneModel = req.body;
      let personneDel = await Personne.remove(personneReq);
      res.json(personneDel);
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/Defunt',async (req: Request, res: Response) => {

  try {
    const personneReq: PersonneModel = req.body;
    let personne = await Personne.findById(personneReq._id);
    if (personne === null ) res.json({'err': 'id not found'});
    else {
      personne.set({defunt: null}) ;
      let personneSave = await personne.save();
      res.json(personneSave);
    }
  } catch (error) {
    res.json({'err': error});
  }
})



// Export the express.Router() instance to be used by server.ts
export const PersonneController: Router = router;