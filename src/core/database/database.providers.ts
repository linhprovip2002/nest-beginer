import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Todo } from 'src/core/entities';

export const databaseProviders = [
  {
    provide: TYPE_ORM,
    useFactory: async () => {
      try {
        let config;
        switch (process.env.NODE_ENV) {
          case DEVELOPMENT:
            config = databaseConfig.development;
            break;
          case TEST:
            config = databaseConfig.test;
            break;
          case PRODUCTION:
            config = databaseConfig.production;
            break;
          default:
            config = databaseConfig.development;
        }
        const typeOrmModule = TypeOrmModule.forRoot({
          type: 'postgres',
          host: config.host,
          port: parseInt(config.port),
          username: config.username,
          password: config.password,
          database: config.database,
          entities: [Todo],
          synchronize: true,
        });
        console.log('Connected to the database successfully.');
        return typeOrmModule;
      } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
      }
    },
  },
];
