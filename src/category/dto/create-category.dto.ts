import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateCategoryDto {
	@ApiProperty({ example: 'Art' })
	@IsNotEmpty()
	title: string
}
