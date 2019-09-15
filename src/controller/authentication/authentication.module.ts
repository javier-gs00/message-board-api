import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { AuthService } from '../../auth/auth.service';

@Module({
  providers: [AuthenticationService, AuthService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
