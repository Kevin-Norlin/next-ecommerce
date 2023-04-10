import mongoose, { Model } from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    desc: String,
    inStock: Boolean
  });
  
export const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);

