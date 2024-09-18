import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CollectionController } from './collection.controller'
import { CollectionService } from './collection.service'
import { Collection } from './entities/collection.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Collection])],
	controllers: [CollectionController],
	providers: [CollectionService],
})
export class CollectionModule {}
