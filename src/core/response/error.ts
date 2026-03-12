// interface for ErrorResponse.error
interface IError<T = unknown> {
  readonly name: string;
  readonly message: string;
  readonly issues?: T;
}

// interface for ErrorResponse
interface IErrorResponse<T = unknown> {
  readonly success: boolean;
  readonly error: IError<T>;
}

// class to standardize API Error responses
export class ErrorResponse<T = unknown> extends Error implements IErrorResponse<T> {
  // set success to always be fale for ErrorResponse
  readonly success = false;

  // constructor to initialize the error
  constructor(readonly error: IError<T>) {
    // call the parent constructor with the error message
    super(error.message);

    // set the prototype explicitly to maintain the correct prototype chain
    Object.setPrototypeOf(this, new.target.prototype);

    // set the name of the error to the name provided in the error object
    this.name = error.name;

    // capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
