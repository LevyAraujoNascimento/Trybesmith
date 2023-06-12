import { Request, Response } from 'express';
import userService from '../services/user.service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const token = await userService.login(req.body);
  if (token.message && token.message.includes('invalid')) {
    return res.status(401).json({ message: token.message });
  }
  if (token.message) return res.status(400).json({ message: token.message });
  return res.status(200).send({ token: token.data });
};

export default {
  login,
};