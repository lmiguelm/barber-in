import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BarbershopImages extends BaseSchema {
  protected tableName = 'barbershop_images'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary();
      table.string('url');

      table.uuid('barbershop_id')
        .references('id')
          .inTable('barbershops')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
