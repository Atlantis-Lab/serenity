import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddReview1571389683757 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "review" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "projectId" character varying NOT NULL, "replyId" character varying NOT NULL, "customerId" character varying NOT NULL, "specialistId" character varying NOT NULL, "rating" integer NOT NULL, "comment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "review"`, undefined)
  }
}
