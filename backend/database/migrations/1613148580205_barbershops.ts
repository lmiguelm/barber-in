import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Barbershops extends BaseSchema {
  protected tableName = 'barbershops'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable();
      table.string('name');
      table.string('description');
      table.string('telephone');
      table.string('whatsapp');
      table.string('email');
      table.string('password');

      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
