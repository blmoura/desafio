import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateInsightTag1636919661937 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'insights_tags',
        columns: [
          {
            name: 'insight_id',
            type: 'uuid'
          },
          {
            name: 'tag_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'insights_tags',
      new TableForeignKey({
        name: 'FKInsightTag',
        referencedTableName: 'insights',
        referencedColumnNames: ['id'],
        columnNames: ['insight_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )

    await queryRunner.createForeignKey(
      'insights_tags',
      new TableForeignKey({
        name: 'FKTagInsight',
        referencedTableName: 'tags',
        referencedColumnNames: ['id'],
        columnNames: ['tag_id'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('insights_tags', 'FKTagInsight')
    await queryRunner.dropForeignKey('insights_tags', 'FKInsightTag')
    await queryRunner.dropTable('insights_tags')
  }
}
