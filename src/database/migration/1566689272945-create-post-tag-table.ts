import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreatePostTagTable1566689272945 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'post_tag',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'postId',
            type: 'int',
          },
          {
            name: 'tagId',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('post_tag', [
      new TableForeignKey({
        columnNames: ['postId'],
        referencedTableName: 'post',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['tagId'],
        referencedTableName: 'tag',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const postTagTable = await queryRunner.getTable('post');
    const foreignKeys = postTagTable.foreignKeys.filter(
      fk =>
        fk.columnNames.indexOf('postId') !== -1 ||
        fk.columnNames.indexOf('tagId') !== -1,
    );
    await queryRunner.dropForeignKeys('post_tag', foreignKeys);
    await queryRunner.dropTable('post_tag');
  }
}
