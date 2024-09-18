import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from './dto/create-user.dto'
import { UserService } from './user.service'

@ApiTags('user')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post('register')
	@UsePipes(new ValidationPipe())
	// @ApiCreatedResponse()
	// @HttpCode(HttpStatus.CREATED)
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto)
	}

	// @Get()
	// findOne(@Param() email: string) {
	// 	return this.userService.findOne(email)
	// }
}
