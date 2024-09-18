import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { CreateTagDto } from './create-tag.dto'

export class UpdateTagDto extends PartialType(CreateTagDto) {
	@ApiProperty({ example: 'Animation' })
	title: string
}
