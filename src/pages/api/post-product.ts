import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from "../../utils/connection";
import { ProductModel } from "../../models/Product";




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "POST") {
      try {
         const conn = await connect();
         const product = new ProductModel(req.body); 
         console.log("This is the product: " + req.body); 
         product.save();
         res.status(201).send("Product stored in DB");
      }
      catch (error){
         console.error(error);
         res.status(500).send("Error storing in DB");
      }
   }
   else {
      res.status(405).send("Only post allowed");
   }
}