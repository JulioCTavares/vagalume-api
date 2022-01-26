import { Connection, createConnection, getConnectionOptions } from "typeorm";
import { getHours, getMinutes } from "date-fns";

const currentHour = getHours(new Date(Date.now()));
const currentMinutes = getMinutes(new Date(Date.now()));

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = createConnection(
    Object.assign(defaultOptions, {
      host: "database_vagalume",
      database: defaultOptions.database,
    })
  );
  console.info(`[DATABASE] ${currentHour}:${currentMinutes} > online`);

  return connection;
};
