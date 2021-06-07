import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddMessage1570297933431 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "message" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "discussionId" character varying NOT NULL, "authorId" character varying NOT NULL, "content" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "message"`, undefined)
  }
}
