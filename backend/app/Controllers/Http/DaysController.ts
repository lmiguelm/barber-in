import { AuthenticationException } from '@adonisjs/auth/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Day from 'App/Models/Day';

export default class DaysController {

  async index({ auth }: HttpContextContract) {
    return await Day.query()
    .where('barbershop_id', auth.user?.id || -1)
    .preload('schedules');
  }
  
  async show({ auth, params }: HttpContextContract) {
    const day = await Day.query()
    .where('barbershop_id', auth.user?.id || -1)
    .where('id', params.id)
    .preload('schedules');

    return day[0];  
  }

  async store( { request, auth }: HttpContextContract ) {
    const barbershopId = auth.user?.id;
    const data = request.all();

    const days = Object.keys(data).map(day => {
      return data[day];
    });

    const daysSave = days.map(async day => {
      const res = await Day.create({ ...day, barbershopId });
      await res.save();
      return res;
    });

    return daysSave;
  };

  async destroy({ auth, params }: HttpContextContract) {
    const barbershopId = auth.user?.id;
    const id = params.id;

    const day = await Day.findOrFail(id);

    if(barbershopId != day.barbershopId) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }

    await day.delete();

    return;
  }
}
