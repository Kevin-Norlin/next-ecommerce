import mongoose, { Model } from "mongoose";


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    roles: [String]
  }, {timestamps: true});
  
export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);