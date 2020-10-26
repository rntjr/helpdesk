import { MigrationInterface, QueryRunner } from 'typeorm'

export class Remodeling1603214177394 implements MigrationInterface {
  name = `Remodeling1603214177394`

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Core"."Usuarios" ALTER COLUMN "tipo" DROP NOT NULL`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Core"."Usuarios" ALTER COLUMN "tipo" SET NOT NULL`
    )
  }
}
