import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

class ConfigService {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number.parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [join(__dirname, './**/*.entity{.ts,.js}')],
    //   migrationsTableName: 'migration',
    //   migrations: ['src/migration/*.ts'],
      ssl: process.env.IS_DEV == 'true' ? true : false,
      autoLoadEntities: true,
    }
  }
}
const ormConfig = new ConfigService();
export { ormConfig }