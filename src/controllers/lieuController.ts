import { Router, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { default as Lieu, lieuModel } from "../models/lieu";
import { request } from 'https';
import { json } from 'body-parser';

// Assign router to the express.Router() instance
const router: Router = Router();

//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE

router.put('/', async (req: Request, res: Response) => {
     
  let lieuReq:lieuModel = req.body;
  let lieu = new Lieu(lieuReq)
  let lieuSave = await lieu.save().catch((err)=>{
    res.json({'err': err});
  }) 
  res.json(lieuSave);

}).get('/', async (req: Request, res: Response) => {
  const lieux = await Lieu.find().catch((err)=>{
      res.json({'err': err});
    }) 
  res.json(lieux);

}).get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const lieu = await Lieu.findById(id).catch((err)=>{
      res.json({'err': err});
    });
    res.json(lieu);

}).post('/',async (req: Request, res: Response) => {
  
  try {
    const lieuReq:lieuModel = req.body;
    let lieu = await Lieu.findById(lieuReq._id);
    if (lieu === null ) res.json({'err': 'id not found'});
    else {
      lieu.set(lieuReq);
      let lieuSave = await lieu.save();
      res.json(lieuSave);
    }
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/',async (req: Request, res: Response) => {
  
  try {
    const lieuReq:lieuModel = req.body;
      let lieuDel = await Lieu.remove(lieuReq);
      res.json(lieuDel);
  } catch (error) {
    res.json({'err': error});
  }

})

// Export the express.Router() instance to be used by server.ts
export const LieuController: Router = router;