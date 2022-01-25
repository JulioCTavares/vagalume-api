import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  const connection = createConnection(
    Object.assign(defaultOptions, {
      host: "database_vagalume",
      database: defaultOptions.database,
    })
  );
  return connection;
};
