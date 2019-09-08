import { Injectable } from '@nestjs/common';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class AuthenticationService {
  constructor(private readonly authService: AuthService) {}

  createToken(): Promise<string> {
    return this.authService.createToken(1);
  }
}
