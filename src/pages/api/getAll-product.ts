import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from "../../utils/connection";
import { ProductType } from '@/utils/types';
import { ProductModel } from "../../models/Product";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            await connect();
            const products = await ProductModel.find();
            res.status(200).json(products);
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Error fetching products from DB");
        }
    }
    else {
        res.status(405).send("Only GET requests are allowed");
    }
}