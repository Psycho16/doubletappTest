export enum HttpClientErrorCodes {
  BadRequest = <number>400,
  Unauthorized = <number>401,
  Forbidden = <number>403,
  NotFound = <number>404,
  MethodNotAllowed = <number>405
}

type HttpErrorMessage = {
  [key in HttpClientErrorCodes]: string
}

export const defaultMessage = 'Something went wrong and request was not completed'

export const messages: HttpErrorMessage = {
  [HttpClientErrorCodes.BadRequest]: 'Test message',
  [HttpClientErrorCodes.Unauthorized]: 'Please login to access this resource',
  [HttpClientErrorCodes.Forbidden]: 'Forbidden',
  [HttpClientErrorCodes.NotFound]: 'The requested resource does not exist or has been deleted',
  [HttpClientErrorCodes.MethodNotAllowed]: 'Method not allowed'
} as const