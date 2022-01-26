import "reflect-metadata";
import "dotenv";
import cors from "cors";
import express, { json } from "express";
import routes from "./routes";
import createConnection from "@shared/infra/typeorm";

createConnection();

export const app = express();

app.use(json());
app.use(cors());
app.use(routes);
