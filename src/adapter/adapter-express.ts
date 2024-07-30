import { NextFunction, Request, Response } from 'express';

export const adapterExpress = function(mFn) {
  return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      const controller = mFn();
      const response = await controller.handle(req.query, req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json({ message: (error as any).message || 'Unexpected error.' });
    }
  };
};
