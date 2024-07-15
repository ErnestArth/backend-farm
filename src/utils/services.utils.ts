import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const jwtSecret = process.env.JWT_SECRET

export const logIn = async (role: string, model: any, email: string, password: string) => {
    try {

        let genericUser: any

        if (role == "Vendor") {
            genericUser = await model.findOne({ storeEmail: email })
        } else {
            genericUser = await model.findOne({ email })
        }
        

        if (!genericUser) {
            return JSON.stringify({ msg: "user  not found!"})
        }

        const passwordMatch = await bcrypt.compare(password, genericUser.password)

        if (!passwordMatch) {
            return JSON.stringify({ msg: "Auth failed" })
        }

        const token = jwt.sign({ userId: genericUser._id, email: genericUser.email }, jwtSecret, { expiresIn: "1h"})

        if (role == "Vendor") {
            return JSON.stringify({
                name: genericUser.storeName,
                email: genericUser.storeEmail,
                token: token
            })
        } else {
            return JSON.stringify({
                name: genericUser.name,
                email: genericUser.email,
                token: token
            })
        }

    } catch (error) {
        
    }
}