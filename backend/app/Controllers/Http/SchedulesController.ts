import { AuthenticationException } from '@adonisjs/auth/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Day from 'App/Models/Day';
import Schedule from 'App/Models/Schedule';
import User from 'App/Models/User';

export default class SchedulesController {

  async index({ params }: HttpContextContract) {
    const { dayId } = params;    
    const schedules = await Schedule.query().where('days_id', dayId); 
    return schedules;
  }

  async store({ request, params, auth }: HttpContextContract) {
    const { dayId } = params;
    const data = request.all();

    const day = await Day.findOrFail(dayId);

    if(day.barbershopId != auth.user?.id) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }

    const schedules = Object.keys(data).map(schedule => {
      return data[schedule];
    });

    const scheduleSave = schedules.map(async data => {
      const schedule = await Schedule.create({  ...data, dayId });
      await schedule.save();
      return schedule;
    });

    return scheduleSave;
  }

  async destroy({ auth, params }: HttpContextContract) {
    const { dayId,  id } = params;
    
    const schedule = await Schedule.findOrFail(id);
    const day = await Day.findOrFail(dayId);

    if(dayId != schedule.dayId || day.barbershopId != auth.user?.id) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }
    await schedule.delete();
    return;
  }
}
