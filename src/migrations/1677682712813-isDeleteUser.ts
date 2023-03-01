import { MigrationInterface, QueryRunner } from "typeorm";

export class isDeleteUser1677682712813 implements MigrationInterface {
    name = 'isDeleteUser1677682712813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "is_delete" boolean DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_delete"`);
    }

}
