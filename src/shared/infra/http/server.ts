import { app } from "./app";
import { getHours, getMinutes } from "date-fns";

const port = process.env.PORT || 3002;
const currentHour = getHours(new Date(Date.now()));
const currentMinutes = getMinutes(new Date(Date.now()));

const server = app.listen(port, () => {
  console.info(`[SERVER] ${currentHour}:${currentMinutes} > online 🚀`);
  console.info(`[PORT] ${currentHour}:${currentMinutes} > ${port}`);
});

process.on("SIGINT", () => {
  server.close();
  console.info(`[SERVER] ${currentHour}:${currentMinutes} > offline`);
});
