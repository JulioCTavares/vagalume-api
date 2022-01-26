import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateManager1643147709762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "manager",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar(25)",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar(125)",
            isUnique: false,
          },
          {
            name: "password",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp with time zone",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp with time zone",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("manager");
  }
}
