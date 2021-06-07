import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddPortfolio1567245596484 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "portfolio" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "userId" character varying NOT NULL, "name" character varying NOT NULL, "images" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6936bb92ca4b7cda0ff28794e48" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "portfolio"`)
  }
}
