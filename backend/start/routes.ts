/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// rotas não autenticadas
Route.group(() => {
  Route.post('/login', 'AuthController.login');
  Route.post('/users', 'UsersController.store');
  Route.resource('/barbershops', 'BarbershopsController').apiOnly().except(['store', 'destroy', 'update']);
  Route.get('/images/barbershops/:id', 'BarbershopImagesController.show');
});

// rotas autenticadas
Route.group(() => {
  Route.resource('/users', 'UsersController').apiOnly().except(['store']);
  Route.resource('/barbershops', 'BarbershopsController').apiOnly().except(['index', 'show']);
  Route.resource('/addresses', 'AddressesController').apiOnly();
  Route.resource('/days', 'DaysController').apiOnly();
  Route.resource('/days/:dayId/schedules', 'SchedulesController').apiOnly();
  Route.resource('/images/barbershops', 'BarbershopImagesController').apiOnly().except(['show', 'index']);
})
.middleware('auth');




