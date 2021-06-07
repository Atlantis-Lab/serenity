/* eslint-disable @typescript-eslint/no-empty-function */

import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCategorySeed1564392658148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const [{ id: groupId }] = await queryRunner.query(
      `INSERT INTO public.category_group (name) VALUES ('Комплексные работы') RETURNING id;`
    )

    await queryRunner.query(
      `INSERT INTO public.category (name, "groupId") VALUES ('Ремонт дома', ${groupId});`
    )

    await queryRunner.query(
      `INSERT INTO public.category (name, "groupId") VALUES ('Ремонт квартиры', ${groupId});`
    )

    await queryRunner.query(
      `INSERT INTO public.category (name, "groupId") VALUES ('Ремонт офиса', ${groupId});`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
