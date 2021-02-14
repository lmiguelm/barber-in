import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class BarbershopImage extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({
    consume: (url: string) =>`${process.env.URL_UPLOADS}${url}`
  })
  public url: string;

  @column({ columnName: 'barbershop_id' })
  public barbershopId: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static generateUid(BarbershopImage: BarbershopImage) {
    BarbershopImage.id = uuid();
  }
}
