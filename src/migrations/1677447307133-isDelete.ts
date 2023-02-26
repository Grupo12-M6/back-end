import { MigrationInterface, QueryRunner } from "typeorm";

export class isDelete1677447307133 implements MigrationInterface {
    name = 'isDelete1677447307133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c35bd657508e8ace18024301308"`);
        await queryRunner.query(`ALTER TABLE "ads" ADD "is_delete" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c35bd657508e8ace18024301308" FOREIGN KEY ("adsId") REFERENCES "ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_c35bd657508e8ace18024301308"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP COLUMN "is_delete"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_c35bd657508e8ace18024301308" FOREIGN KEY ("adsId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
