import brcypt from 'bcryptjs';
import { ServiceResponse } from 'src/types/ServiceResponse';
import { Token } from 'src/types/Token';
import { Login } from 'src/types/Login';
import UserModel from '../models/user.model';
import jwtUtils from '../utils/jwt.utils';

const login = async (user: Login): Promise<ServiceResponse<Token>> => {
  if (!user.username || !user.password) {
    return { message: '"username" and "password" are required', data: null }; 
  }

  const isAvailable = await UserModel.findOne(
    { where: { username: user.username } },
  );

  if (!isAvailable || !brcypt.compareSync(user.password, isAvailable.dataValues.password)) {
    return { message: 'Username or password invalid', data: null };
  }

  const token = jwtUtils.sign(user);

  return { message: null, data: token };
};

export default {
  login,
};