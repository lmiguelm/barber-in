import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

import User from 'App/Models/User';
import Auth from 'App/Models/Auth';

import { v4 as uuid } from 'uuid';

 
export default class UsersController {

  async index() {
    const users = await User.all();
    return users;
  }

  async show({ auth, params }: HttpContextContract) {
    if(params.id != auth.user?.id) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }
    const user = await User.findOrFail(auth.user?.id);
    return user;
  }

  async store( { request }: HttpContextContract) {
    const data = request.only(['name', 'last_name', 'email', 'password']);
    const id = uuid();
    await User.create({...data, id});
    await Auth.create({ id, email: data.email, password: data.password });
    return;
  }

  async update({ params, request, auth }: HttpContextContract) {

    if(params.id != auth.user?.id) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }

    const { id } = params;
    const data = request.all();

    await User.query().where('id', id).update({ ...data });
    await Auth.query().where('id', id).update({ ...data });

    return await User.findOrFail(id);
  }

  async destroy ( { params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    user.delete();
    return;
  }
}

