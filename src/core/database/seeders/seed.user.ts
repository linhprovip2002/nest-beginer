// seed user supper admin
import { DataSource } from 'typeorm';
import { User, Role, Permission } from '../../entities/';
import { BcryptServiceImpl } from 'src/core/service/bcrypt.service';

async function seedUser(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);
  const roleRepository = dataSource.getRepository(Role);
  const permissionRepository = dataSource.getRepository(Permission);
  const role = await roleRepository.findOne({ where: { name: 'Super Admin' } });
  if (!role) {
    throw new Error('Role not found');
  }
  const permission = await permissionRepository.findOne({
    where: { name: 'Super Admin' },
  });
  if (!permission) {
    throw new Error('Permission not found');
  }
  const user = await userRepository.findOne({
    where: { email: 'admin@gmail.com' },
  });
  const password = await new BcryptServiceImpl().hashPassword('admin123');
  if (!user) {
    const newUser = new User();
    newUser.firstName = 'Super';
    newUser.lastName = 'Admin';
    newUser.email = 'admin@gmail.com';
    newUser.password = password;
    newUser.role = role;
    newUser.isActive = true;
    await userRepository.save(newUser);
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
seedUser(dataSource).catch((error) => {
  console.error('Failed to seed super admin:', error);
  process.exit(1);
});
