import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUsername1682171221164 implements MigrationInterface {
    name = 'AlterUserDeleteUsername1682171221164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","username")
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users", new TableColumn({
            name : "username",
            type : "varchar"
        }));
        
    }

}
