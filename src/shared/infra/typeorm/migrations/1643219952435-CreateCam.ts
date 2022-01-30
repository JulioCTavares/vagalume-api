import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCam1643219952435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cam",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "ip",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "establishment_id",
            type: "uuid",
            isNullable: false,
          },
          {
            name: "user",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "model",
            type: "varchar(90)",
            isNullable: false,
          },
          {
            name: "installation",
            type: "timestamp with time zone",
            isNullable: false,
          },
          {
            name: "countdown",
            type: "text",
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
        foreignKeys: [
          {
            name: "FKCamEstablishment",
            referencedTableName: "establishment",
            referencedColumnNames: ["id"],
            columnNames: ["establishment_id"],
            onDelete: "RESTRICT",
            onUpdate: "RESTRICT",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cam");
  }
}
