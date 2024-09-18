import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Nft } from './entities/nft.entity'
import { NftController } from './nft.controller'
import { NftService } from './nft.service'

@Module({
	imports: [TypeOrmModule.forFeature([Nft])],
	controllers: [NftController],
	providers: [NftService],
})
export class NftModule {}
