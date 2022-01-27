import "reflect-metadata";
import "dotenv";
import "express-async-errors";
import cors from "cors";
import express, { json } from "express";
import routes from "./routes";
import createConnection from "@shared/infra/typeorm";
import "@shared/container";

createConnection();

const app = express();

app.use(json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Tá funcionando");
});

export default app;
