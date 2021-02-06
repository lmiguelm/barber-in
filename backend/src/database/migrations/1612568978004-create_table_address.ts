import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableAddress1612568978004 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'address',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                }, 
                {
                    name: 'latitude',
                    type: 'decimal'
                },
                {
                    name: 'longitude',
                    type: 'decimal'
                },
                {
                    name: 'barbershop_id',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'address_barbershop',
                    columnNames: ['barbershop_id'],
                    referencedTableName: 'barbershops',
                    referencedColumnNames: ['id']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address');
    }

}
