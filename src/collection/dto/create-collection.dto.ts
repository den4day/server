import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Nft } from 'src/nft/entities/nft.entity'
import { User } from 'src/user/entities/user.entity'

export class CreateCollectionDto {
	@ApiProperty({ example: 'DSGN Animals' })
	@IsNotEmpty()
	title: string

	nfts: Nft[]

	creator: User
}
