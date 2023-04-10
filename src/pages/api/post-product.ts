import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductType } from "../../utils/types";
import { connect } from "../../utils/connection";
import { ProductModel } from "../../models/Product";
import bcrypt from "bcrypt";


// Validates a user with bcrypt.compare.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if(req.method === "POST") {
    const {name, imgUrl, desc, inStock } = req.body;
    const conn = await connect()
          // Creates a new user and stores it in the database
         .then( () => { const product = new ProductModel({name: name, imgUrl: imgUrl, desc: desc, inStock: inStock}); console.log(req.body); product.save();})
         .then( (product) => {res.status(201).json(product);})
         .catch((error) => {console.error(error); res.status(500).send("Error storing in database");})
    }
    else {
     res.status(405).send("Only post allowed!")
    }
 }

