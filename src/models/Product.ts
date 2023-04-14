import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    desc: String,
    imgUrl: String,
    stock: Number,
    isShowcase: Boolean,
    type: String,
    typeSpecific: Object
  });
  
export const ProductModel = mongoose.models.Product || mongoose.model('Product', ProductSchema);

