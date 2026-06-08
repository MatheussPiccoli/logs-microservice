import {
  CreateLogController,
  GetLogByDeliveryIdController,
} from "../controllers/index.js";
import {
  CreateLogUseCase,
  GetLogByDeliveryIdUseCase,
} from "../use-cases/index.js";
import {
  PostgresCreateLogRepository,
  PostgresGetLogByDeliveryIdRepository,
} from "../repositories/index.js";

export const makeCreateLogController = () => {
  const createLogRepository = new PostgresCreateLogRepository();

  const createLogUseCase = new CreateLogUseCase(createLogRepository);

  return new CreateLogController(createLogUseCase);
};

export const makeGetLogByDeliveryIdController = () => {
  const getLogByDeliveryIdRepository =
    new PostgresGetLogByDeliveryIdRepository();

  const getLogByDeliveryIdUseCase = new GetLogByDeliveryIdUseCase(
    getLogByDeliveryIdRepository,
  );

  return new GetLogByDeliveryIdController(getLogByDeliveryIdUseCase);
};
