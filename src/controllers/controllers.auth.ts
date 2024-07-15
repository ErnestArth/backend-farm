import { Request, Response } from "express"
import { generateVerificationCode, passwordsMatch } from "../utils/validation.utils"
import { loginUser, registerUser } from "../services/services.auth"
import bcrypt from "bcrypt"
import nodemailer from "nodemailer";

export const register = async (request: Request, response: Response) => {
    let { role, name, email,phoneNumber,username, password, repeatPassword } = request.body


    if (!passwordsMatch(password, repeatPassword)) {
        return response.status(400).send({
            successful: false,
            msg: "Passwords don't match"
        })
    }

    const verificationCode = generateVerificationCode(6)
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        let newUser = await registerUser({
            role,
            name,
            email,
            phoneNumber,
            username,
            password: hashedPassword,
            verificationCode,
        })


        if(!newUser) {
            return response.status(401).send({
                successful: false,
                msg: "Could not create user"
            })
        }
        // TODO: send email to user with verification code
        // included 
        // handle if user already exists



        return response.status(201).send({
            successuful: true,
            msg: "User Created!",
            user: newUser
        })

    } catch (error) {
        throw error
    }
}

export const verifyAccount = async (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        throw error
    }
}

export const login = async (request: Request, response: Response) => {
    const { role, email, password } = request.body

    try {
        const user = await loginUser({
            role,
            email,
            password
        })

        const loggedInUser = JSON.parse(user)

        return response.status(200).send(loggedInUser)
    } catch (error) {
        return response.status(500).send({ msg: "Login failed "})
    }
}

export const logout = async (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        throw error
    }
}