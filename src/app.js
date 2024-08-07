import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app= express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))  // form ko achhe se read karne ke liye i.e form se data aaye uske liye
app.use(express.urlencoded({extended:true, limit:"16kb"})) // url ko achhe se read karne ke liye i.e url se data aaye uske liye
app.use(express.static("public"))  //jaisa hamare paas public hai waisa normal


export {app}