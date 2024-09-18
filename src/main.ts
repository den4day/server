import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)

	app.setGlobalPrefix('api')
	app.enableCors()

	const config = new DocumentBuilder()
		.setTitle('NFT-Marketplace')
		.setVersion('')
		.addBearerAuth()
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	await app.listen(configService.get('PORT'))
}
bootstrap()
