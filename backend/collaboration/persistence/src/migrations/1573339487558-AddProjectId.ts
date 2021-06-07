import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddProjectId1573339487558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "project_id" ("id" SERIAL NOT NULL, CONSTRAINT "PK_bae247b87502ad7bc261680b970" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "project_id"`, undefined)
  }
}
