import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1676919685526 implements MigrationInterface {
    name = 'createUser1676919685526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL, "title" character varying(150) NOT NULL, "ad_type" character varying(15) NOT NULL, "description" character varying(400) NOT NULL, "price" numeric(10,2) NOT NULL, "mileage" numeric(10,2) NOT NULL, "year" integer NOT NULL, "motor_type" character varying(15) NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "announcement"`);
    }

}
