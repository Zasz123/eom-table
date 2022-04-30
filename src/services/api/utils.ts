import { IError } from "@interfaces/error";
import axios, { AxiosError } from "axios";

export function CustomError(error: any | AxiosError): IError {
  if (axios.isAxiosError(error)) {
    return {
      code: Number(error.code),
      message: error.message,
      name: error.name,
    };
  }

  return {
    code: error.code,
    message: error.message,
    name: error.name,
    stack: error.stack,
  };
}
