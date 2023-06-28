import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";

@Injectable()
export class PostgresConfigServe implements TypeOrmOptionsFactory{
    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [],
            synchronize: true
            //{Todos esse 'DB_' são do arquivo '.env' onde estão colocados os valores dessas variáveis. E esse .env não é enviado pro GIT por isso utilizamos .env}
        }       
    }
}