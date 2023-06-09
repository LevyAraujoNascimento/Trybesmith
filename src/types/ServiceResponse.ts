export type ServiceResponseError = {
  message: string,
  data: null,
};

export type ServiceResponseSuccess<T> = {
  message: null, 
  data: T,
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;