import { MigrationInterface, QueryRunner } from "typeorm";

export class usersTokens1678273541409 implements MigrationInterface {
    name = 'usersTokens1678273541409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tokenActivation" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tokenResetPassword" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tokenResetPassword"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tokenActivation"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "active"`);
    }

}
