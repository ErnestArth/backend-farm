import { Schema, Types, model, models } from "mongoose";

const DeliveryGuySchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: false },
    ID: { type: String, required: false },
    gender: { type: String, required: false },
    license: { type: String, required: false },
    phoneNumber: { type: String, required: true },
    verificationCode: { type: String, required: true },
    orderId: [{ type: Types.ObjectId, ref: "Order" }]
}, { timestamps: true })

const DeliveryGuy = models.DeliveryGuy || model("DeliveryGuy", DeliveryGuySchema)
export default DeliveryGuy