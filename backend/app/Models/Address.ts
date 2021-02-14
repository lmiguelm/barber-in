import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public latitude: string;

  @column()
  public longitude: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column({ columnName: 'barbershop_id', serializeAs: null })
  barbershopId: string;

  @beforeSave()
  public static generateUid(address: Address) {
    address.id = uuid();
  }
}
