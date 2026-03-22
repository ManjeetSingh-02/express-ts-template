// type-imports
import type { Request, Response, NextFunction } from 'express';

// type definition for the function that will be wrapped by the async-handler
type ExecutableFunction = (
  request: Request,
  response: Response,
  nextFunction: NextFunction
) => void | Promise<void>;

// type definition for the function that will be returned by the async-handler
type AsyncHandlerFunction = (
  request: Request,
  response: Response,
  nextFunction: NextFunction
) => Promise<void>;

// function to wrap async handlers and catch errors
export default function (executableFunction: ExecutableFunction): AsyncHandlerFunction {
  return function (
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ): Promise<void> {
    return Promise.resolve(executableFunction(request, response, nextFunction)).catch(nextFunction);
  };
}
