import { Schema, Types, model, models } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    username: { type: String, required: false },
    verificationCode: { type: String, required: false },
    
}, { timestamps: true })


const User = models.User || model("User", UserSchema)
export default User