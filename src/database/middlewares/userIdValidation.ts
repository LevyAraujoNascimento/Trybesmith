import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user.model';

const validUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userId } = req.body;
  if (!userId) {
    res.status(400).json({ message: '"userId" is required' });
    return;
  }
  if (typeof userId !== 'number') {
    res.status(422).json({ message: '"userId" must be a number' });
    return;
  }
  const user = await UserModel.findOne({ where: { id: userId } });

  if (!user) {
    res.status(404).json({ message: '"userId" not found' });
    return;
  }
  next();
};

export default validUserId;