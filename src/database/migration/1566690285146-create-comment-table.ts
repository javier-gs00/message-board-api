import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCommentTable1566690285146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'comment',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'content',
            type: 'varchar',
          },
          {
            name: 'postId',
            type: 'int',
          },
          {
            name: 'userId',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('comment', [
      new TableForeignKey({
        columnNames: ['postId'],
        referencedTableName: 'post',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'user',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const commentTable = await queryRunner.getTable('post');
    const foreignKeys = commentTable.foreignKeys.filter(
      fk =>
        fk.columnNames.indexOf('postId') !== -1 ||
        fk.columnNames.indexOf('userId') !== -1,
    );
    await queryRunner.dropForeignKeys('commentTable', foreignKeys);
    await queryRunner.dropTable('commentTable');
  }
}
