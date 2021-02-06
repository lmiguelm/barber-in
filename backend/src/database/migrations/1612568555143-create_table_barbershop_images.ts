import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableBarbershopImages1612568555143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'barbershop_images',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'url',
                    type: 'varchar'
                },
                {
                    name: 'barbershop_id',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'image_barbershop',
                    columnNames: ['barbershop_id'],
                    referencedTableName: 'barbershops',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('barbershop_images');
    }

}
