import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { Category } from 'src/category/entities/category.entity'
import { Collection } from 'src/collection/entities/collection.entity'
import { User } from 'src/user/entities/user.entity'

export class CreateNftDto {
	@ApiProperty({ example: 'Space Walking' })
	@IsNotEmpty()
	title: string

	@ApiProperty({
		example:
			'There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians',
	})
	@IsNotEmpty()
	description: string

	@ApiProperty({ example: 52 })
	@IsNotEmpty()
	price: number

	@ApiProperty({ example: 4 })
	@IsNotEmpty()
	bid: number

	@ApiProperty({ example: 7 })
	@IsNotEmpty()
	auctionTime: number

	creator: User

	owner: User

	collection?: Collection

	category: Category
}
