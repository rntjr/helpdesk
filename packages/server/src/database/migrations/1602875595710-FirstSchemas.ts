import { MigrationInterface, QueryRunner } from 'typeorm'
import { environment as env } from '../../../../../environment'

export class FirstSchemas1602875595710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE SCHEMA IF NOT EXISTS "HelpDesk" AUTHORIZATION "${env.server.database.users.migration}"`
    )
    await queryRunner.query(
      `CREATE SCHEMA IF NOT EXISTS "Common" AUTHORIZATION "${env.server.database.users.migration}"`
    )
    await queryRunner.query(
      `CREATE SCHEMA IF NOT EXISTS "Core" AUTHORIZATION "${env.server.database.users.migration}"`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP SCHEMA "HelpDesk"`)
    await queryRunner.query(`DROP SCHEMA "Common"`)
    await queryRunner.query(`DROP SCHEMA "Core"`)
  }
}
