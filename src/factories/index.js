import { CreateLogController } from "../controllers/index.js";
import { CreateLogUseCase } from "../use-cases/index.js";
import { PostgresCreateLogRepository } from "../repositories/index.js";

export const makeCreateLogController = () => {
  const createLogRepository = new PostgresCreateLogRepository();

  const createLogUseCase = new CreateLogUseCase(createLogRepository);

  return new CreateLogController(createLogUseCase);
};
