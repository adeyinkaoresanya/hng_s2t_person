import express from "express";
import bodyParser from "body-parser";
import {config} from "./config/config.js";
import { connectToMongoDB } from "./db/db.js";
import userRoute from "./route/user.route.js";



const app = express()


const PORT= config.port


app.use(express.json());

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }));

//route
app.use("/", userRoute);



connectToMongoDB()

app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`)
})

