import "reflect-metadata";
import "dotenv";
import cors from "cors";
import express, { json, Request, Response, NextFunction } from "express";
import routes from "./routes";
import "@shared/infra/typeorm";

export const app = express();

app.use(json());
app.use(cors());
app.use(routes);
