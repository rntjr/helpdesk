import { MigrationInterface, QueryRunner } from 'typeorm'

export class GenerateFirstModeling1602526809095 implements MigrationInterface {
  name = `GenerateFirstModeling1602526809095`

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Common"."Endereco" ("id" SERIAL NOT NULL, "cep" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "PK_ed0afa1003ac106ce1d620bc51d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Common"."Fisica" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "aniversario" TIMESTAMP NOT NULL, CONSTRAINT "PK_b0c1cbd418099ff8dd8a1ed2fa6" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Common"."Juridica" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "fantasia" character varying NOT NULL, CONSTRAINT "PK_d507696b1f6423f25c950dd5917" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Common"."Pessoa" ("id" SERIAL NOT NULL, "idEnderecoId" integer, CONSTRAINT "PK_4093dac2522e35757bfa1beef27" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Programas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_08cc3c6d92065932e234d0b976c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Telas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "tipo" integer NOT NULL, "rota" character varying NOT NULL, "idProgramasId" integer, CONSTRAINT "PK_f6718fb189aa12761467dcb3148" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Usuarios" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "nome" character varying NOT NULL, "usuario" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "UQ_7e1d4389b55972f5b09506b715c" UNIQUE ("email"), CONSTRAINT "UQ_c6d1ab71e01109b0dc235d9749b" UNIQUE ("usuario"), CONSTRAINT "PK_51e232e2f40b93dc672ebfb9580" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."UsuariosGrupoPermissao" ("id" SERIAL NOT NULL, "idUsuarioId" integer, CONSTRAINT "PK_c8f4ff5c191bef27e900e5c08fc" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."GrupoPermissao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "usuarioGrupoPermissaoId" integer, CONSTRAINT "PK_1d08b633a1947a7ce017c730a46" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."AcessoGrupoPermissao" ("id" SERIAL NOT NULL, "isMenu" boolean NOT NULL, "isAcesso" boolean NOT NULL, "isSalvar" boolean NOT NULL, "isEditar" boolean NOT NULL, "isDeletar" boolean NOT NULL, "idTelasId" integer, "idGrupoPermissaoId" integer, CONSTRAINT "PK_3b6892e5a8a61b51ae820c2ef0d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "quadros" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_4a7c5fb416dec12b53258d7f7e7" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Categorias" ("id" SERIAL NOT NULL, "tipo" integer NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_4fee8bff013204d364bfe27f32d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Tarefas" ("id" SERIAL NOT NULL, "abertura" TIMESTAMP NOT NULL DEFAULT 1602526811155, "classe" integer NOT NULL, "tipo" integer NOT NULL, "estado" integer NOT NULL, "prioridade" integer NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "autorId" integer, CONSTRAINT "PK_c14bc6faaf626eaba99e6263195" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Etiquetas" ("id" SERIAL NOT NULL, "idTarefasId" integer, CONSTRAINT "PK_a4c0e5b93f02d531c238472cb28" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "Common"."Pessoa" ADD CONSTRAINT "FK_0e801f84fb678909b653c889ba0" FOREIGN KEY ("idEnderecoId") REFERENCES "Common"."Endereco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."Telas" ADD CONSTRAINT "FK_d4f9fa6ce4ec71ebd0b896b3b9a" FOREIGN KEY ("idProgramasId") REFERENCES "Core"."Programas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" ADD CONSTRAINT "FK_7b6b7bfc884a1b60af557597bae" FOREIGN KEY ("idUsuarioId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."GrupoPermissao" ADD CONSTRAINT "FK_83e1f2680a63cd50f556efeecbc" FOREIGN KEY ("usuarioGrupoPermissaoId") REFERENCES "Core"."UsuariosGrupoPermissao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" ADD CONSTRAINT "FK_080a37e846bc9b8375be4c1a103" FOREIGN KEY ("idTelasId") REFERENCES "Core"."Telas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" ADD CONSTRAINT "FK_a48016455c0295be5c4004854be" FOREIGN KEY ("idGrupoPermissaoId") REFERENCES "Core"."GrupoPermissao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" ADD CONSTRAINT "FK_161cfb4e8fd22e4238b7b5c41f0" FOREIGN KEY ("autorId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Etiquetas" ADD CONSTRAINT "FK_f80d4150120ed66e0069be5cfbb" FOREIGN KEY ("idTarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Etiquetas" DROP CONSTRAINT "FK_f80d4150120ed66e0069be5cfbb"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" DROP CONSTRAINT "FK_161cfb4e8fd22e4238b7b5c41f0"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" DROP CONSTRAINT "FK_a48016455c0295be5c4004854be"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" DROP CONSTRAINT "FK_080a37e846bc9b8375be4c1a103"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."GrupoPermissao" DROP CONSTRAINT "FK_83e1f2680a63cd50f556efeecbc"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" DROP CONSTRAINT "FK_7b6b7bfc884a1b60af557597bae"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."Telas" DROP CONSTRAINT "FK_d4f9fa6ce4ec71ebd0b896b3b9a"`
    )
    await queryRunner.query(
      `ALTER TABLE "Common"."Pessoa" DROP CONSTRAINT "FK_0e801f84fb678909b653c889ba0"`
    )
    await queryRunner.query(`DROP TABLE "HelpDesk"."Etiquetas"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Tarefas"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Categorias"`)
    await queryRunner.query(`DROP TABLE "quadros"`)
    await queryRunner.query(`DROP TABLE "Core"."AcessoGrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."GrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."UsuariosGrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."Usuarios"`)
    await queryRunner.query(`DROP TABLE "Core"."Telas"`)
    await queryRunner.query(`DROP TABLE "Core"."Programas"`)
    await queryRunner.query(`DROP TABLE "Common"."Pessoa"`)
    await queryRunner.query(`DROP TABLE "Common"."Juridica"`)
    await queryRunner.query(`DROP TABLE "Common"."Fisica"`)
    await queryRunner.query(`DROP TABLE "Common"."Endereco"`)
  }
}
