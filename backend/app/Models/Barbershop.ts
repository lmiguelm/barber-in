import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
// import { v4 as uuid } from 'uuid';
import Hash from '@ioc:Adonis/Core/Hash';

import Address from './Address';
import Day from './Day';
import BarbershopImage from './BarbershopImage';

export default class Barbershop extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string
  
  @column()
  public description: string
  
  @column()
  public telephone: string
  
  @column()
  public whatsapp: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => BarbershopImage)
  public images: HasMany<typeof BarbershopImage>;

  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>;

  @hasMany(() => Day)
  public days: HasMany<typeof Day>;

  @beforeSave()
  public static async hashPassword(barbershop: Barbershop) {
    if (barbershop.$dirty.password) { 
      barbershop.password = await Hash.make(barbershop.password);
    }
  }
}
