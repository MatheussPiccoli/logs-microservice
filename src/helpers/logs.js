import { badRequest, notFound } from "./http.js";
import validator from "validator";

export const checkIfIdIsValid = (id) => validator.isUUID(id);

export const invalidIdResponse = () =>
  badRequest({
    message: "The provided id is not valid",
  });

export const checkIfEmailIsValid = (email) => validator.isEmail(email);

export const residentNotFoundResponse = () =>
  notFound({ message: "User not found" });

export const invalidEmailResponse = () =>
  badRequest({
    message: "Not a valid email. Please provide a valid one",
  });

export const checkIfActionIsValid = (action) => {
  return ["PACKAGE_STORED", "PACKAGE_COLLECTED", "DOOR_OPENED"].includes(
    action,
  );
};
