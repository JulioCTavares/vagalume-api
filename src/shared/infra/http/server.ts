import app from "./app";

const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Back-end started on localhost:${port}! 🚀`)
);
