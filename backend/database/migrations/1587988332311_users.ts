import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().notNullable();
      table.string('name');
      table.string('last_name');
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.timestamps(true);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
