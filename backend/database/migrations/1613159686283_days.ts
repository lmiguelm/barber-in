import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Days extends BaseSchema {
  protected tableName = 'days'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable();
      table.integer('day').notNullable().unique();
      table.string('opening_hour').notNullable();
      table.string('closing_hour').notNullable();
      table.timestamps(true);
      table.uuid('barbershop_id').references('id').inTable('barbershops').onUpdate('CASCADE').onDelete('CASCADE');
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
