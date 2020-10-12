import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableUsuario1602466025812 implements MigrationInterface {
  name = 'CreateTableUsuario1602466025812'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "Usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "nome" character varying, "usuario" character varying, "senha" character varying, CONSTRAINT "UQ_ca3e46c76538a31e48348447503" UNIQUE ("email"), CONSTRAINT "UQ_5b2f82d97839b2a4e19419ec8e4" UNIQUE ("usuario"), CONSTRAINT "PK_6b4c9e5c7d35b294307b3fd0fea" PRIMARY KEY ("id"))'
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "Usuarios"')
  }
}
