import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get()
  findAll(): string {
    return 'test role';
  }
}
