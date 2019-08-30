import * as winston from 'winston';
import { Logger } from 'winston';

const config = {
  levels: {
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5,
    silly: 6,
    custom: 7,
  },
  colors: {
    error: 'red',
    debug: 'blue',
    warn: 'yellow',
    data: 'grey',
    info: 'green',
    verbose: 'cyan',
    silly: 'magenta',
    custom: 'yellow',
  },
};

winston.addColors(config.colors);

// eslint-disable-next-line
const customFormat = winston.format(info => {
  if (info instanceof Error) {
    return {
      ...info,
      timestamp: info.timestamp,
      level: info.level,
      message: info.message,
      stack: info.stack,
    };
  } else {
    return { ...info };
  }
});

const wLogger: Logger = winston.createLogger({
  levels: config.levels,
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    customFormat(),
  ),
  exitOnError: false,
  transports: [
    new winston.transports.File({
      level: 'error',
      filename: 'logs/errors.log',
      handleExceptions: true,
      format: winston.format.json(),
    }),
    new winston.transports.File({
      level: 'info',
      filename: 'logs/combined.log',
      handleExceptions: true,
      format: winston.format.json(),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  wLogger.add(
    new winston.transports.Console({
      level: 'info',
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf((info): string => {
          const message: string | JSON =
            typeof info.message === 'string'
              ? info.message
              : JSON.stringify(info.message);
          return `${info.timestamp} ${info.level}: ${message}`;
        }),
      ),
    }),
  );
}

export const logger = wLogger;

export class LoggerStream {
  public write(message: string): void {
    wLogger.info(message);
  }
}
