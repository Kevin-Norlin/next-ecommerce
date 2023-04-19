import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserType } from "../../utils/types/generalTypes";
import { connect } from "../../utils/connection";
import { UserModel } from "../../models/User";
import bcrypt from "bcrypt";


// Validates a user with bcrypt.compare.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const conn = await connect()
            .then(async () => {
                const user = await UserModel.findOne({ email });
                if (!user) {
                    res.status(404).json({ error: "Wrong email" });
                }
                else {
                    const validPassword = await bcrypt.compare(password, user.password);
                    if (validPassword) {
                        res.status(200).json({ message: "Valid credentials! " })
                    }
                    else {
                        res.status(401).json({ error: "Wrong password" })
                    }

                }
            })
            .catch((error) => { res.status(500).json({ error: error }) })
    }
}
