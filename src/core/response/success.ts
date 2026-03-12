// interface for SuccessResponse
interface ISuccessResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

// class to standardize API Success responses
export class SuccessResponse<T = unknown> implements ISuccessResponse<T> {
  // set success to always be true for SuccessResponse
  readonly success = true;

  // constructor to initialize message and optional data
  constructor(
    readonly message: string,
    readonly data?: T
  ) {}
}
