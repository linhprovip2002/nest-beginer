import { join } from 'path';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { databaseConfig } from '../database.config';


console.log('process.env.NODE_ENV', process.env.NODE_ENV);
let config;
switch (process.env.NODE_ENV) {
  case 'development':
    config = databaseConfig.development;
    break;
  case 'test':
    config = databaseConfig.test;
    break;
  case 'production':
    config = databaseConfig.production;
    break;
  default:
    config = databaseConfig.development;
}
export default new DataSource({
  ...config,
  entities: [join(__dirname, '../../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../../database/seeders/*{.ts,.js}')],
  migrationsTableName: 'seeder',
} as DataSourceOptions);
