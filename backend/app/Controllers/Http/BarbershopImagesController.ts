import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application';
import { v4 as uuid } from 'uuid';
import BarbershopImage from 'App/Models/BarbershopImage';
import { AuthenticationException } from '@adonisjs/auth/build/standalone';
import fs from 'fs';

export default class BarbershopImagesController {

  async destroy({ params, auth, response }: HttpContextContract) {

    const barbershopId = auth.user?.id;
    const id = params.id;

    const image = await BarbershopImage.findOrFail(id);

    if(image.barbershopId != barbershopId) {
      throw new AuthenticationException(
        'Unauthorized access',
        'E_UNAUTHORIZED_ACCESS',
      );
    }

    const urlFull = process.env.URL_UPLOADS as string;
    const filename = image.url.replace(urlFull, '');

    fs.unlink(Application.tmpPath(`uploads/barbershops/${filename}`), res => console.log(res));
    await image.delete();
    
    return;
  }
  
  async store({ request, response, auth }: HttpContextContract) {

    const barbershopId = auth.user?.id;

    const images = request.files('images', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg']
    });

    if(!images) {
      return response.status(400);
    }

    images.map(async image => {
      const filename = `${uuid()}.${image.extname}`;

      await image?.move(Application.tmpPath('uploads/barbershops'), {
        name: filename
      });

      await BarbershopImage.create({ url: filename, barbershopId }); 
    });

    return;
  }

  async show( { params }: HttpContextContract ) {
    const images = await BarbershopImage.query().where('barbershop_id', params.id);
    return images;
  }
}
