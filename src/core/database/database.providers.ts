import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { APP_ENTITIES, MIGRATION_CONFIGS } from './config/entities-declaration';

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
        const options = {
          ...config,
          entities: APP_ENTITIES,
          synchronize: true,
          logging: true,
          migrationsRun: true,
          migrationsTableName: MIGRATION_CONFIGS.migrationsTableName,
          migrations: MIGRATION_CONFIGS.migrations,
        };
        TypeOrmModule.forRootAsync({
          useFactory: () => ({
            ...options,
          }),
        });
      } catch (error) {
        console.error('Error connecting to the database:', error.message);
        throw error;
      }
    },
  },
];
