/* eslint-disable @typescript-eslint/no-empty-function */

import { MigrationInterface, QueryRunner } from 'typeorm'

export class DropSending1566149967071 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "sending"`)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
