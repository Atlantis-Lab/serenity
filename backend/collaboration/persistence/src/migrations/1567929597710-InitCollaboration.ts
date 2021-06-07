import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitCollaboration1567929597710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TYPE "specialist_interactionformofwork_enum" AS ENUM('company', 'person')`
    )
    await queryRunner.query(
      `CREATE TABLE "specialist" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "specialisationMain" text NOT NULL DEFAULT '[]', "specialisationAdditional" text NOT NULL DEFAULT '[]', "interactionFormofwork" "specialist_interactionformofwork_enum", "interactionNumberofemployees" character varying, CONSTRAINT "PK_461a4a90df7daf980d8b79bc3ce" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "specialist"`)
    await queryRunner.query(`DROP TYPE "specialist_interactionformofwork_enum"`)
  }
}
