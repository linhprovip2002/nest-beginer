// seed role
import { DataSource } from 'typeorm';
import { User, Role, Permission } from '../../entities/';

async function seedRole(dataSource: DataSource) {
  const roleRepository = dataSource.getRepository(Role);
  const role = await roleRepository.findOne({ where: { name: 'Super Admin' } });
  if (!role) {
    const newRole = new Role();
    newRole.name = 'Super Admin';
    await roleRepository.save(newRole);
  }
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
seedRole(dataSource).catch((error) => {
  console.error('Failed to seed role:', error);
  process.exit(1);
});
