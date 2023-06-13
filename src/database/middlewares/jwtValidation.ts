import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user.model';
import jwtUtils from '../utils/jwt.utils';

const validToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization');
  if (!token) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }
  try {
    const decoded = jwtUtils.verify(token as string);
    const user = await UserModel.findOne({ where: { username: decoded.username } });
    if (!user) {
      res.status(401).json({ message: 'Invalid token' });
      return;  
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });   
  }
/*
try {
    const decoded = jwtUtils.verify(token as string);
    const user = await UserModel.findOne({ where: { username: decoded.username } });
    if (!user) res.status(401).json({ message: 'Token inválido' }); 
    next();
    } catch (error) {
    res.status(401).json({ message: 'Invalid token' });   
    }
*/  
};

export default validToken;