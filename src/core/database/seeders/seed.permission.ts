import { DataSource } from 'typeorm';
import { User, Role, Permission } from '../../entities/';

async function seedPermission(dataSource: DataSource) {
  const permissionRepository = dataSource.getRepository(Permission);

  // List of permissions to seed with optional descriptions
  const permissionsToSeed = [
    { name: 'LOGIN_SYSTEM', description: 'Permission to login to the system' },
    { name: 'CREATE_USER', description: 'Permission to create a user' },
    {
      name: 'GRANT_ACCESS',
      description: 'Permission to grant access to resources',
    },
    {
      name: 'SUPER_ADMIN',
      description: 'Permission for Super Admin activities',
    },
  ];

  // Check and seed each permission
  await Promise.all(
    permissionsToSeed.map(async (perm) => {
      let permission = await permissionRepository.findOne({
        where: { name: perm.name },
      });
      if (!permission) {
        permission = permissionRepository.create(perm);
        await permissionRepository.save(permission);
      }
    }),
  );
}

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'test',
  entities: [User, Role, Permission],
  synchronize: true,
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    seedPermission(dataSource).catch((error) => {
      console.error('Failed to seed permissions:', error);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
