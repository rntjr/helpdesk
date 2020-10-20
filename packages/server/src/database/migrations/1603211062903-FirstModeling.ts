import { MigrationInterface, QueryRunner } from 'typeorm'

export class FirstModeling1603211062903 implements MigrationInterface {
  name = `FirstModeling1603211062903`

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Common"."Endereco" ("id" SERIAL NOT NULL, "cep" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "UQ_4c5988bb5e840ea1c58a7ea693a" UNIQUE ("cep"), CONSTRAINT "PK_ed0afa1003ac106ce1d620bc51d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Common"."Pessoa" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "fantasia" character varying, "cgc" character varying NOT NULL, "aniversario" TIMESTAMP, "enderecoId" integer, CONSTRAINT "UQ_995fbd128bf24b1471332421f37" UNIQUE ("cgc"), CONSTRAINT "PK_4093dac2522e35757bfa1beef27" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Telas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "tipo" integer NOT NULL, "rota" character varying NOT NULL, "programaId" integer, CONSTRAINT "PK_f6718fb189aa12761467dcb3148" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Programas" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_08cc3c6d92065932e234d0b976c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."GrupoPermissao" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, CONSTRAINT "PK_1d08b633a1947a7ce017c730a46" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."AcessoGrupoPermissao" ("id" SERIAL NOT NULL, "isMenu" boolean NOT NULL DEFAULT false, "isAcesso" boolean NOT NULL DEFAULT false, "isSalvar" boolean NOT NULL DEFAULT false, "isEditar" boolean NOT NULL DEFAULT false, "isDeletar" boolean NOT NULL DEFAULT false, "telasId" integer, "grupoPermissaoId" integer, CONSTRAINT "PK_3b6892e5a8a61b51ae820c2ef0d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."UsuariosGrupoPermissao" ("id" SERIAL NOT NULL, "usuarioId" integer, "permissaoId" integer, CONSTRAINT "PK_c8f4ff5c191bef27e900e5c08fc" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "Core"."Usuarios" ("id" SERIAL NOT NULL, "tipo" integer NOT NULL, "email" character varying NOT NULL, "nome" character varying, "usuario" character varying NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "UQ_7e1d4389b55972f5b09506b715c" UNIQUE ("email"), CONSTRAINT "UQ_c6d1ab71e01109b0dc235d9749b" UNIQUE ("usuario"), CONSTRAINT "PK_51e232e2f40b93dc672ebfb9580" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Categorias" ("id" SERIAL NOT NULL, "tipo" integer NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, CONSTRAINT "PK_4fee8bff013204d364bfe27f32d" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Atribuidos" ("id" SERIAL NOT NULL, "tarefasId" integer, "usuarioId" integer, CONSTRAINT "PK_f327496cdaad3a3a67fc22d207c" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."ChecklistItem" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying, "isFechado" boolean NOT NULL DEFAULT false, "checkListId" integer, CONSTRAINT "PK_1ef673313edf5808f58fb401556" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Checklist" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying, "tarefasId" integer, CONSTRAINT "PK_cdc4ddbf77ccd3a1355c75f63d1" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Revisores" ("id" SERIAL NOT NULL, "tarefasId" integer, "usuarioId" integer, CONSTRAINT "PK_1e352243b270f24cb78ee5e5c74" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Status" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "tipo" integer NOT NULL, CONSTRAINT "PK_9be6f64694fd7b6076b88080f09" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Tarefas" ("id" SERIAL NOT NULL, "abertura" TIMESTAMP NOT NULL, "classe" integer NOT NULL, "tipo" integer NOT NULL, "prioridade" integer, "titulo" character varying NOT NULL, "descricao" character varying, "autorId" integer, "statusId" integer, CONSTRAINT "PK_c14bc6faaf626eaba99e6263195" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Etiquetas" ("id" SERIAL NOT NULL, "tarefasId" integer, CONSTRAINT "PK_a4c0e5b93f02d531c238472cb28" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Quadros" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying, CONSTRAINT "PK_985fd65cec12c48986a3eac51c5" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."ColunaQuadro" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying, "quadrosId" integer, CONSTRAINT "PK_816a45e68a90569c33eebb87188" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "HelpDesk"."Cartao" ("id" SERIAL NOT NULL, "sequencia" integer NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying, "colunaQuadroId" integer, "tarefasId" integer, CONSTRAINT "PK_b22178ee731b64be053408ec2f5" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `ALTER TABLE "Common"."Pessoa" ADD CONSTRAINT "FK_5b92912fdbd817f1c80a02a1475" FOREIGN KEY ("enderecoId") REFERENCES "Common"."Endereco"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."Telas" ADD CONSTRAINT "FK_31c1d8403d38a866a734c195e27" FOREIGN KEY ("programaId") REFERENCES "Core"."Programas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" ADD CONSTRAINT "FK_c001771b7f5a68454a89fb3ddac" FOREIGN KEY ("telasId") REFERENCES "Core"."Telas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" ADD CONSTRAINT "FK_a141432ab7a557fc6b28330db35" FOREIGN KEY ("grupoPermissaoId") REFERENCES "Core"."GrupoPermissao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" ADD CONSTRAINT "FK_c9f3bfd4aa45b671183ab7b740e" FOREIGN KEY ("usuarioId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" ADD CONSTRAINT "FK_ea78a845a2b8122a00eb782ee11" FOREIGN KEY ("permissaoId") REFERENCES "Core"."GrupoPermissao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Atribuidos" ADD CONSTRAINT "FK_84ce36df7ccc85a34ba70fa0e3a" FOREIGN KEY ("tarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Atribuidos" ADD CONSTRAINT "FK_8bd05d16f828d3fa2ede6fef60d" FOREIGN KEY ("usuarioId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."ChecklistItem" ADD CONSTRAINT "FK_8f8b76a7fc65fa7b284480b2e44" FOREIGN KEY ("checkListId") REFERENCES "HelpDesk"."Checklist"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Checklist" ADD CONSTRAINT "FK_3de29af071ba88b997f381f6537" FOREIGN KEY ("tarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Revisores" ADD CONSTRAINT "FK_41c51bb0c77bf911f3d7f6df121" FOREIGN KEY ("tarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Revisores" ADD CONSTRAINT "FK_e6676f024fa6e48653d62c0ba77" FOREIGN KEY ("usuarioId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" ADD CONSTRAINT "FK_161cfb4e8fd22e4238b7b5c41f0" FOREIGN KEY ("autorId") REFERENCES "Core"."Usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" ADD CONSTRAINT "FK_b95332658ec2c8a8d575f8d9348" FOREIGN KEY ("statusId") REFERENCES "HelpDesk"."Status"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Etiquetas" ADD CONSTRAINT "FK_a84dc6a042d8a61420509152a75" FOREIGN KEY ("tarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."ColunaQuadro" ADD CONSTRAINT "FK_4a5d6b013b329ab75c322c3c7a2" FOREIGN KEY ("quadrosId") REFERENCES "HelpDesk"."Quadros"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Cartao" ADD CONSTRAINT "FK_35ad0e753fcbc3502a55ba87373" FOREIGN KEY ("colunaQuadroId") REFERENCES "HelpDesk"."ColunaQuadro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Cartao" ADD CONSTRAINT "FK_26c0451bf45e84d5075d3ebd516" FOREIGN KEY ("tarefasId") REFERENCES "HelpDesk"."Tarefas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Cartao" DROP CONSTRAINT "FK_26c0451bf45e84d5075d3ebd516"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Cartao" DROP CONSTRAINT "FK_35ad0e753fcbc3502a55ba87373"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."ColunaQuadro" DROP CONSTRAINT "FK_4a5d6b013b329ab75c322c3c7a2"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Etiquetas" DROP CONSTRAINT "FK_a84dc6a042d8a61420509152a75"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" DROP CONSTRAINT "FK_b95332658ec2c8a8d575f8d9348"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Tarefas" DROP CONSTRAINT "FK_161cfb4e8fd22e4238b7b5c41f0"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Revisores" DROP CONSTRAINT "FK_e6676f024fa6e48653d62c0ba77"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Revisores" DROP CONSTRAINT "FK_41c51bb0c77bf911f3d7f6df121"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Checklist" DROP CONSTRAINT "FK_3de29af071ba88b997f381f6537"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."ChecklistItem" DROP CONSTRAINT "FK_8f8b76a7fc65fa7b284480b2e44"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Atribuidos" DROP CONSTRAINT "FK_8bd05d16f828d3fa2ede6fef60d"`
    )
    await queryRunner.query(
      `ALTER TABLE "HelpDesk"."Atribuidos" DROP CONSTRAINT "FK_84ce36df7ccc85a34ba70fa0e3a"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" DROP CONSTRAINT "FK_ea78a845a2b8122a00eb782ee11"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."UsuariosGrupoPermissao" DROP CONSTRAINT "FK_c9f3bfd4aa45b671183ab7b740e"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" DROP CONSTRAINT "FK_a141432ab7a557fc6b28330db35"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."AcessoGrupoPermissao" DROP CONSTRAINT "FK_c001771b7f5a68454a89fb3ddac"`
    )
    await queryRunner.query(
      `ALTER TABLE "Core"."Telas" DROP CONSTRAINT "FK_31c1d8403d38a866a734c195e27"`
    )
    await queryRunner.query(
      `ALTER TABLE "Common"."Pessoa" DROP CONSTRAINT "FK_5b92912fdbd817f1c80a02a1475"`
    )
    await queryRunner.query(`DROP TABLE "HelpDesk"."Cartao"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."ColunaQuadro"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Quadros"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Etiquetas"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Tarefas"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Status"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Revisores"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Checklist"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."ChecklistItem"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Atribuidos"`)
    await queryRunner.query(`DROP TABLE "HelpDesk"."Categorias"`)
    await queryRunner.query(`DROP TABLE "Core"."Usuarios"`)
    await queryRunner.query(`DROP TABLE "Core"."UsuariosGrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."AcessoGrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."GrupoPermissao"`)
    await queryRunner.query(`DROP TABLE "Core"."Programas"`)
    await queryRunner.query(`DROP TABLE "Core"."Telas"`)
    await queryRunner.query(`DROP TABLE "Common"."Pessoa"`)
    await queryRunner.query(`DROP TABLE "Common"."Endereco"`)
  }
}
