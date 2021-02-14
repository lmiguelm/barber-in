import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address';

export default class AddressesController {

  async index({ auth }: HttpContextContract) {
    const barbershopId = auth.user?.id;
    const addresses = await Address.query().where('barbershop_id', barbershopId || -1);
    return addresses;
  }

  async show({ auth, params }: HttpContextContract) {
    const barbershopId = auth.user?.id;
    const id = params.id;
    const address = await Address.query().where('barbershop_id', barbershopId || -1).where('id', id);
    return address[0];
  }

  async store({ auth, request }: HttpContextContract){ 
    const barbershopId = auth.user?.id;
    const data = request.only(['latitude', 'longitude']);
    const address = await Address.create({ ...data, barbershopId });
    return address;
  }

  async destroy({ params, auth, response }: HttpContextContract) {

    const id = params.id;
    const address = await Address.findOrFail(id);

    if(address.barbershopId != auth.user?.id) {
      return response.status(401);
    }

    await address.delete();
    return;
  }
}
