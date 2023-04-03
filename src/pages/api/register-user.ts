import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserType } from "../../utils/types";
import { connect } from "../../utils/connection";
import { UserModel } from "../../models/User";
import bcrypt from "bcrypt";



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if(req.method === "POST") {
    const {email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const conn = await connect()
         // Creates a new user and stores it in the database
        .then( () => { const user = new UserModel({email: email, password: hashedPassword}); console.log(req.body); user.save();})
        .then( (user) => {res.status(201).json(user);})
        .catch((error) => {console.error(error); res.status(500).send("Error storing in database");})
   }
   else {
    res.status(405).send("Only post allowed!")
   }
}
