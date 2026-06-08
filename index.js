import "dotenv/config.js";
import express, { response } from "express";

const app = express();

app.use(express.json());

app.post("/api/logs", async (request, response) => {
  const createLogController = makeCreateLogController();

  const { statusCode, body } = await createLogController.execute(request);

  response.status(statusCode).send(body);
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`),
);
