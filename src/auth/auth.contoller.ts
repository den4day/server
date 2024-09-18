import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { LocalAuthGuard } from './guards/local-auth.guard'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('login')
	@UseGuards(LocalAuthGuard)
	async login(@Request() req, @Body() createAuthDto: CreateAuthDto) {
		return this.authService.login(req.user)
	}

	@Get('info')
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	getProfile(@Request() req) {
		return req.user
	}
}
