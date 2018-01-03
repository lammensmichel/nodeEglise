import { Router, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { default as Horaire, horaireModel } from "../models/horaire";
import { request } from 'https';
import { json } from 'body-parser';

// Assign router to the express.Router() instance
const router: Router = Router();

//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.put('/', async (req: Request, res: Response) => {
     
  let horaireReq:horaireModel = req.body;
  let horaire = new Horaire(horaireReq)
  let horaireSave = await horaire.save().catch((err)=>{
    res.json({'err': err});
  }) 
  res.json(horaireSave);

}).get('/', async (req: Request, res: Response) => {
  const horairex = await Horaire.find().catch((err)=>{
      res.json({'err': err});
    }) 
  res.json(horairex);

}).get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const horaire = await Horaire.findById(id).catch((err)=>{
      res.json({'err': err});
    });
    res.json(horaire);

}).get('/:startDate/:endDate', async (req: Request, res: Response) => {

  const { startDate, endDate } = req.params;
  const horaire = await Horaire.find({
    date: {
      $gte: new Date(startDate),
      $lt: new Date(endDate)
    }
  }).catch((err)=>{
    res.json({'err': err});
  });
  res.json(horaire);

}).post('/',async (req: Request, res: Response) => {
  
  try {
    const horaireReq:horaireModel = req.body;
    let horaire = await Horaire.findById(horaireReq._id);
    if (horaire === null ) res.json({'err': 'id not found'});
    else {
      horaire.set(horaireReq);
      let horaireSave = await horaire.save();
      res.json(horaireSave);
    }
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/',async (req: Request, res: Response) => {
  
  try {
    const horaireReq:horaireModel = req.body;
      let horaireDel = await Horaire.remove(horaireReq);
      res.json(horaireDel);
  } catch (error) {
    res.json({'err': error});
  }

})

// Export the express.Router() instance to be used by server.ts
export const horaireController: Router = router;