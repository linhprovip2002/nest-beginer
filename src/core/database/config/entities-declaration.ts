import { Todo, User, Permission, Role } from 'src/core/entities';
import { join } from 'path';

export const APP_ENTITIES = [Todo, User, Permission, Role];

export const MIGRATION_CONFIGS = {
  migrations: [join(__dirname, '../../database/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
};
