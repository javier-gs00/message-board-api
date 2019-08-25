import * as dotenv from 'dotenv';
import * as Joi from '@hapi/joi';
import * as fs from 'fs';
import * as path from 'path';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private envConfig: EnvConfig;
  private logTopic = '[ConfigService]';

  constructor(fileName: string) {
    console.log(`${this.logTopic} Looking for .env file....`);
    const resolvedPath = path.resolve(__dirname, '..', '..', fileName);
    console.log(`${this.logTopic} .env file found at`, resolvedPath);
    const config = dotenv.parse(fs.readFileSync(resolvedPath));
    console.log(`${this.logTopic} .env file parsed correctly`);
    this.envConfig = this.validateInput(config);
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    console.log(`${this.logTopic} Starting environment variables validation`);
    const envVarSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string().valid([
        'development',
        'production',
        'test',
        'provision',
      ]),
      PORT: Joi.number().default(3000),
      API_AUTH_ENABLED: Joi.boolean().required(),
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarSchema,
    );

    if (error) {
      console.log(
        `${this.logTopic} Envrionment variable validaiton error: ${error.message}`,
      );
      throw new Error(error.message);
    }
    console.log(`${this.logTopic} Environment variables validation successful`);
    return validatedEnvConfig;
  }

  get environment(): string {
    return this.envConfig.NODE_ENV;
  }

  get isAuthEnabled(): boolean {
    return Boolean(this.envConfig.API_AUTH_ENABLED);
  }

  get port(): number {
    return parseInt(this.envConfig.PORT, 10);
  }
}
