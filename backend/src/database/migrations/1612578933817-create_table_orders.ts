import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableOrders1612573320475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orders',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'date',
                    type: 'varchar'
                },
                {
                    name: 'total',
                    type: 'decimal'
                },
                {
                    name: 'schedule',
                    type: 'varchar'
                },
                {
                    name: 'barbershop_id',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'varchar'
                },
            ],
            foreignKeys: [
                {
                    name: 'order_barbershop',
                    columnNames: ['barbershop_id'],
                    referencedTableName: 'barbershops',
                    referencedColumnNames: ['id']
                },
                {
                    name: 'order_user',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id']
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders');
    }

}
