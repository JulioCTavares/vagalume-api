import ErrorsApp from "@shared/errors/ErrorsApp";
import { Router } from "express";
import { readFile } from "fs";

const readRouter = Router();

readRouter.get(`/:${file}`, (req, res) => {
  readFile(`${file}`, "utf-8", (err, data) => {
    if (err) {
      throw new ErrorsApp("File error", 500);
    }

    const content = data.toString().split("\r\n");

    return res.json({ success: true, content });
  });
});

export default readRouter;
