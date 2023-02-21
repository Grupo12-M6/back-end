import { MigrationInterface, QueryRunner } from "typeorm";

export class attUser1677006735867 implements MigrationInterface {
    name = 'attUser1677006735867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthday" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthday" TIMESTAMP NOT NULL`);
    }

}
