import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RemoveColumnsDays extends BaseSchema {
  protected tableName = 'days'

  public async up () {
    this.schema.alterTable(this.tableName, table => {
      table.dropColumn('opening_hour');
      table.dropColumns('closing_hour');
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
