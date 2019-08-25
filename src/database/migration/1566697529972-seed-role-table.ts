import { MigrationInterface, QueryRunner } from 'typeorm';
import { Role } from '../../entity/role.entity';

export class SeedRoleTable1566697529972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const roleRepo = await queryRunner.connection.getRepository(Role);

    await roleRepo.save([
      { name: 'admin' },
      { name: 'user' },
      { name: 'visitor' },
    ]);

    // await queryRunner.connection.manager.create(Role, { name: 'admin' });
    // await queryRunner.connection.manager.create(Role, { name: 'user' });
    // await queryRunner.connection.manager.create(Role, { name: 'visitor' });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // await queryRunner.connection.manager.delete(Role, { name: 'admin' });
    // await queryRunner.connection.manager.delete(Role, { name: 'user' });
    // await queryRunner.connection.manager.delete(Role, { name: 'visitor' });
  }
}
