//const express = require("express");
import express from "express"
import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'
import { userRouter } from "./user.router";

const prisma = new PrismaClient();
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);


app.listen(5000, () => {
  console.log(`Listening on port ${3000}`);
});
