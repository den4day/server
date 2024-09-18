import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, MinLength } from 'class-validator'

export class CreateAuthDto {
	@ApiProperty({ example: 'animakid24@test.com' })
	@IsEmail()
	email: string

	@ApiProperty({ example: '1231231' })
	@MinLength(6, { message: 'Password must be more than 6 symbols' })
	password: string
}
