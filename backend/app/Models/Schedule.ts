import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public schedule: string;

  @column({ columnName: 'days_id', serializeAs: null })
  public dayId: string; 

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static generateUid(schedule: Schedule) {
    schedule.id = uuid();
  }
}
