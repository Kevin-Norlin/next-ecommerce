import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserType } from "../../utils/types/generalTypes";
import { connect } from "../../utils/connection";
import { UserModel } from "../../models/User";
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === "POST") {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
         const conn = await connect();
         const duplicate = await UserModel.findOne({ email: email.toLowerCase() });
         if (duplicate) {
            res.status(400).json({ Error: "User already exists" })
         }
         const user = new UserModel({ email: email.toLowerCase(), password: hashedPassword });
         console.log(req.body);
         await user.save();
         res.status(200).json({ message: "User created" });
      } catch (error) {
         console.error(error);
         res.status(500).json({ error: "Error storing in DB" });
      }
   }
   else {
      res.status(405).json({ message: "Only post allowed" });
   }


}