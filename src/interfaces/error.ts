export interface IErrorDTO {
  statusCode: number;
  message: string;
}

export interface IError {
  name: string;
  code: number;
  message: string;
  stack?: any;
}
