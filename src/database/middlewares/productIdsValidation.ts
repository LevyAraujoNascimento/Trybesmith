import { NextFunction, Request, Response } from 'express';

const validProductIds = (req: Request, res: Response, next: NextFunction): void => {
  const { productIds } = req.body;
  if (productIds === undefined) {
    res.status(400).json({ message: '"productIds" is required' });
    return;
  }
  if (!Array.isArray(productIds)) {
    res.status(422).json({ message: '"productIds" must be an array' });
    return;
  }
  const test = productIds.some((element) => typeof element !== 'number');

  if (test === true || productIds.length === 0) {
    res.status(422).json({ message: '"productIds" must include only numbers' });
    return;
  }
  next();
};

export default validProductIds;