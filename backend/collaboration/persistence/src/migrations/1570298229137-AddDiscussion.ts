import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDiscussion1570298229137 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "discussion" ("id" uuid NOT NULL, "version" integer NOT NULL DEFAULT 0, "specialistId" character varying NOT NULL, "customerId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_b93169eb129e530c6a4c3b9fda1" PRIMARY KEY ("id"))`,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "discussion"`, undefined)
  }
}
