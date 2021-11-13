import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateInsights1636813280306 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'insights',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'texto',
            type: 'varchar'
          },
          {
            name: 'data_criacao',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'data_modificacao',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('insights')
  }
}
