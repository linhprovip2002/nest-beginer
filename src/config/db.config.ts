import { Connection, createConnection, DatabaseType } from 'typeorm';
// import * as entities from '../app/entities';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const shouldCache = (): boolean => {
  return !['test', 'development'].includes(process.env.NODE_ENV ?? '');
};

export default async function postgresConnection(): Promise<Connection> {
  const config = {
    database: 'sgroup',
    // entities: Object.values(entities),
    host: '127.0.0.1',
    password: '123456',
    port: 5432,
    type: 'postgres' as DatabaseType,
    username: 'postgres',
    synchronize: false,
    dropSchema:
      process.env.NODE_ENV !== 'production' &&
      process.env.POSTGRES_DROP_SCHEMA === 'true',
    migrations: ['dist/migrations/*.js'],
    migrationsRun: true,
    cache: shouldCache(),
  } as PostgresConnectionOptions;

  return await createConnection(config);
}
