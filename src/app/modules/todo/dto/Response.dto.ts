// common response dto

export interface IResponse<T> {
  message: string;
  data: T;
}
