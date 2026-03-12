// internal-imports
import { SuccessResponse } from '../../../core/index.js';

// type-imports
import type { Request, Response } from 'express';

// controller for module
export const controller = {
  // @controller GET /
  checkHealth: (_request: Request, response: Response<SuccessResponse>): void => {
    response.status(200).json(new SuccessResponse('Service is healthy'));
  },
};
