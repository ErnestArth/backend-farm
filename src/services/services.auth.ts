import { UserData, loginUserParams } from "../types"
import Customer from "../database/models/models.customer"
import DeliveryGuy from "../database/models/models.deliveryGuy"
import Vendor from "../database/models/models.vendor"
import { connectToDatabase } from "../database"
import { logIn } from "../utils/services.utils"
import User from "../database/models/models.customer"


export const registerUser = async ({
    name, email,phoneNumber,username, password, verificationCode, role
}: any) => {
    try {
        await connectToDatabase()
        switch(role) {
            case "User":
                return await User.create({
                    name,
                    email,
                    username,
                    password,
                    verificationCode
                })
            case "DeliveryGuy":
                return await DeliveryGuy.create({
                    name,
                    email,
                    phoneNumber,
                    password,
                    verificationCode
                })
            case "Vendor":
                return await Vendor.create({
                    storeName: name,
                    storeEmail: email,
                    phoneNumber,
                    password,
                    verificationCode
                })
        }
    } catch (error) {
        throw error
    }
}

export const loginUser = async ({ role, email, password }: any) => {
    try {
        await connectToDatabase()
        switch(role) {
            case "User":
                const customer = await logIn(role, User, email, password)
                console.log(customer);
                
                return customer

            case "DeliveryGuy":
                const delivery_guy = await logIn(role, DeliveryGuy, email, password)
                return delivery_guy

            case "Vendor":
                const vendor = await logIn(role, Vendor, email, password)
                return vendor
        }
    } catch (error) {
        throw error
    }
}