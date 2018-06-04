import { Router, Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { default as Defunt, defuntModel } from "../models/defunt";
import { request } from 'https';
import { json } from 'body-parser';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome

//Create = PUT
//Retrieve = GET
//Update = POST
//Delete = DELETE

router.put('/', async (req: Request, res: Response) => {
     
  let defuntReq:defuntModel = req.body;
  let defunt = new Defunt(defuntReq)
  let defuntSave = await defunt.save().catch((err)=>{
    res.json({'err': err});
  }) 
  res.json(defuntSave);

}).get('/', async (req: Request, res: Response) => {
  const defunts = await Defunt.find().catch((err)=>{
      res.json({'err': err});
    }) 
  res.json(defunts);

}).get('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const defunt = await Defunt.findById(id).catch((err)=>{
      res.json({'err': err});
    });
    res.json(defunt);

}).post('/',async (req: Request, res: Response) => {
  
  try {
    const defuntReq:defuntModel = req.body;
    console.log(defuntReq);
    let defunt = await Defunt.findById(defuntReq._id);
    if (defunt === null ) res.json({'err': 'id not found'});
    else {
      defunt.set(defuntReq);
      let defuntSave = await defunt.save();
      res.json(defuntSave);
    }
  } catch (error) {
    res.json({'err': error});
  }

}).delete('/',async (req: Request, res: Response) => {
  
  try {
    const defuntReq:defuntModel = req.body;
      let defuntDel = await Defunt.remove(defuntReq);
      res.json(defuntDel);
  } catch (error) {
    res.json({'err': error});
  }

})

// Export the express.Router() instance to be used by server.ts
export const DefuntController: Router = router;