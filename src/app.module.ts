import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { CollectionModule } from './collection/collection.module'
import { NftModule } from './nft/nft.module'
import { SubscriptionModule } from './subscription/subscription.module'
import { TagModule } from './tag/tag.module'
import { UserModule } from './user/user.module'

@Module({
	imports: [
		UserModule,
		CategoryModule,
		AuthModule,
		NftModule,
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USER'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				autoLoadEntities: true,
				synchronize: true,
			}),
			inject: [ConfigService],
		}),
		TagModule,
		CollectionModule,
		SubscriptionModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
