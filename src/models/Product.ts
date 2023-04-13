import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    imgUrl: String,
    desc: String,
    inStock: Boolean,
    isShowcase: Boolean
  });
  
export const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);

