import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Barbershop from 'App/Models/Barbershop';
import Auth from 'App/Models/Auth';

import { v4 as uuid } from 'uuid';
import { AuthenticationException } from '@adonisjs/auth/build/standalone';

export default class BarbershopsController {

  async index() {
    return await Barbershop
      .query()
      .select('id', 'name')
      .preload('addresses', addresses => {
        addresses.select(['latitude', 'longitude']);
      });
  }

  async show({ params }: HttpContextContract) {
    return await Barbershop
      .query()
      .where('id', params.id)
      .preload('images')
      .preload('addresses')
      .preload('days', days => {
        days.preload('schedules', schedules => {
          schedules.select(['schedule']);
        });
        days.orderBy('day', 'asc');
      });
  }

  async store({ request }:HttpContextContract) {
    const data = request.only(['name', 'description', 'telephone', 'whatsapp', 'email', 'password']);
    const id = uuid();
    const barbershop = await Barbershop.create({ ...data, id });
    await Auth.create({ id, email: data.email, password: data.password });
    return barbershop;
  }

  async destroy({ params, auth }:HttpContextContract) {
    const userId = auth.user?.id;
    const barbershop = await Barbershop.findOrFail(params.id);

    if(userId != barbershop.id) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }

    await barbershop.delete();
    return;
  }
}
