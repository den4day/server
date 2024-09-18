import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Nft } from 'src/nft/entities/nft.entity'

export class CreateTagDto {
	@ApiProperty({ example: 'Moon' })
	@IsNotEmpty()
	title: string

	nfts?: Nft[]
}
