import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedRoleTable1566697529972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into('role', ['name'])
      .values([{ name: 'admin' }, { name: 'user' }, { name: 'visitor' }])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.connection
      .createQueryBuilder()
      .delete()
      .from('role')
      .where('name IN (:...names)', { names: ['admin', 'user', 'visitor'] })
      .execute();
  }
}
