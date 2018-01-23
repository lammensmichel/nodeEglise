import { Router, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { request } from 'https';
import { json } from 'body-parser';
import { default as Pretre, pretreModel } from '../models/pretre';

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
     
  let pretreReq:pretreModel = req.body;
  let pretre = new Pretre(pretreReq)
  let pretreSave = await pretre.save().catch((err)=>{
    res.json({'err': err});
  }) 
  res.json(pretreSave);

}).get('/', async (req: Request, res: Response) => {
  const pretre = await Pretre.find().catch((err)=>{
      res.json({'err': err});
    }) 
  res.json(pretre);

}).get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const pretre = await Pretre.findById(id).catch((err)=>{
      res.json({'err': err});
    });
    res.json(pretre);

}).post('/',async (req: Request, res: Response) => {
  
  try {
    const pretreReq:pretreModel = req.body;
    let pretre = await Pretre.findById(pretreReq._id);
    if (pretre === null ) res.json({'err': 'id not found'});
    else {
      pretre.set(pretreReq);
      let pretreSave = await pretre.save();
      res.json(pretreSave);
    }
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/',async (req: Request, res: Response) => {
  
  try {
    const pretreReq:pretreModel = req.body;
      let pretreDel = await Pretre.remove(pretreReq);
      res.json(pretreDel);
  } catch (error) {
    res.json({'err': error});
  }

})

// Export the express.Router() instance to be used by server.ts
export const PretreController: Router = router;