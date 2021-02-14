import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuid } from 'uuid';
import convertDays from '../../utils/convertDays';
import Schedule from './Schedule';

export default class Day extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ 
    consume: (day: number) => convertDays(day)
  })
  day: number;

  @column({ columnName: 'barbershop_id', serializeAs: null })
  barbershopId: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Schedule)
  public schedules: HasMany<typeof Schedule>;

  @beforeSave()
  public static generateUid(day: Day) {
    day.id = uuid();
  }
}
