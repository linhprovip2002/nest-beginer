import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './app/modules/todo/todo.module';
import { UserModule } from './app/modules/user/user.module';
import { postgresConnection } from './config/';
import { Todo } from './app/modules/todo/entities/Todo.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const connection = await postgresConnection();
        return {
          ...connection.options,
          entities: [Todo], // Move entities here
          synchronize: true,
        };
      },
    }),
    TodoModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
