import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableMenu1612573555659 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'menu',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'barbershop_id',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'menu_barbershop',
                    columnNames: ['barbershop_id'],
                    referencedTableName: 'barbershops',
                    referencedColumnNames: ['id']
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('menu');
    }

}
