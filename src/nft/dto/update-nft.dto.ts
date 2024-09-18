import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { CreateNftDto } from './create-nft.dto'

export class UpdateNftDto extends PartialType(CreateNftDto) {
	@ApiProperty({ example: 'Space Walking' })
	@IsNotEmpty()
	title: string

	@ApiProperty({ example: 52 })
	@IsNotEmpty()
	price: number
}
