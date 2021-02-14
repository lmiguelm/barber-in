import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  async login({ request, auth }: HttpContextContract) {
    const data = request.only(['email', 'password']);
    const token = await auth.use('api').attempt(data.email, data.password);
    return token.toJSON();
  };
}

