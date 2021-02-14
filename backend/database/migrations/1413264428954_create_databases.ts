import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateDatabases extends BaseSchema {

  public async up () {
    this.schema.raw('CREATE DATABASE IF NOT EXISTS barberin');
  }

  public async down () {
    this.schema.raw('DROP DATABASE barberin')
  }
}
