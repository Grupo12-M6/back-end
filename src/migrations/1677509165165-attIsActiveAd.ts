import { MigrationInterface, QueryRunner } from "typeorm";

export class attIsActiveAd1677509165165 implements MigrationInterface {
    name = 'attIsActiveAd1677509165165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "is_active" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "is_active" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "is_active" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ads" ALTER COLUMN "is_active" SET NOT NULL`);
    }

}
