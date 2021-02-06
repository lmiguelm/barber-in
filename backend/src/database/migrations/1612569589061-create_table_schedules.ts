import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableSchedules1612569589061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'schedules',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'schedule',
                    type: 'varchar'
                },
                {
                    name: 'barbershop_id',
                    type: 'varchar'
                },
            ],
            foreignKeys: [
                {
                    name: 'schedules_barbershop',
                    columnNames: ['barbershop_id'],
                    referencedTableName: 'barbershops',
                    referencedColumnNames: ['id']
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('schedules');
    }

}
