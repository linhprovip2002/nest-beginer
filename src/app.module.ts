import { Module } from '@nestjs/common';
import { DatabaseModule } from './core/database';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {}
