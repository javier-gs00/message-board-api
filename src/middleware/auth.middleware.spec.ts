import { AuthMiddleware } from './auth.middleware';
import { AuthService } from 'dist/auth/auth.service';

describe('AuthMiddleware', () => {
  it('should be defined', () => {
    const authService = new AuthService();
    expect(new AuthMiddleware(authService)).toBeDefined();
  });
});
