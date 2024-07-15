import express from "express"
import cors from "cors"
import "dotenv/config"
import authRoutes from "./routes/routes.auth"

const PORT = process.env.PORT

const app = express()

app.use(express.json())
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
    credentials: true,
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})