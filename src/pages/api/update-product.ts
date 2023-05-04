import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from "../../utils/connection";
import { ProductType } from '@/utils/types/productTypes';
import { ProductModel } from "../../models/Product";

// API route to update Product. Takes at minimum a name, and updates the remaining attributes in the object.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "PUT") {
        const data = req.body;
        let name = data.name;
        console.log(name);
        if (!name) {
            throw new Error("Include name in request");
        }
        // Array of the attributes to be updated
        const update = Object.entries(data).map(entry => {
            if (entry[1] === "" || entry[0] === "typeSpecific") {
                return undefined;
            }
            else {
                return { [entry[0]]: entry[1] };
            }
        }).filter(entry => entry !== undefined);
        console.log(update);
        try {
            connect();
            update.map(async entry => {
                let doc = await ProductModel.findOneAndUpdate(name, entry);
            })
            res.status(200).json({ message: "Product updated successfully" });
            console.log("Product updated successfully");
        }
        catch (error) {
            res.status(400).json({ error: "Something went wrong updating proudct" });
            console.log("Something went wrong updating proudct"); 
        }
    }
}


