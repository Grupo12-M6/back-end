import express from "express"
import cors from 'cors'
import "express-async-errors"
import "reflect-metadata"

import { appRoutes } from "./routes"

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));

appRoutes(app)

export default app