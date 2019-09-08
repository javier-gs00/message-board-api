import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  createToken(userId: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const expiresIn = '15m';
      jwt.sign({ userId }, 'secret', { expiresIn }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, 'secret', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}
