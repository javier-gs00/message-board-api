import { Controller, Post, Body } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { LoginBody } from './dto/login-body.dto';

@ApiUseTags('Authentication')
@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post()
  async login(@Body() loginBody: LoginBody): Promise<{ token: string }> {
    const token = await this.authenticationService.createToken();
    return { token };
  }
}
