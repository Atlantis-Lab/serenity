import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddReply1570298501071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "reply" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "projectId" character varying NOT NULL, "specialistId" character varying NOT NULL, "discussionId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "reply"`, undefined)
  }
}
