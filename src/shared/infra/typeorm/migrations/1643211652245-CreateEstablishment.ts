import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEstablishment1643211652245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "establishment",
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
            name: "address",
            type: "varchar(255)",
            isNullable: false,
          },
          {
            name: "category",
            type: "enum",
            enumName: "categories",
            enum: ["mall", "hotel", "college"],
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
    await queryRunner.dropTable("establishment");
  }
}
