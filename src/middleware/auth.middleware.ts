import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: any, next: () => void) {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');

      try {
        const tokenData = await this.authService.verifyToken(token);

        // PENDING: get user from the database and attach to the request

        next();
      } catch (error) {
        throw new ForbiddenException();
      }
    } else {
      throw new ForbiddenException();
    }
  }
}
