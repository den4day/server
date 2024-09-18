import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Req,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { CreateNftDto } from './dto/create-nft.dto'
import { UpdateNftDto } from './dto/update-nft.dto'
import { NftService } from './nft.service'

@ApiTags('nft')
@Controller('nft')
export class NftController {
	constructor(private readonly nftService: NftService) {}

	@Post('create')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@UsePipes(new ValidationPipe())
	create(@Body() createNftDto: CreateNftDto, @Req() req) {
		return this.nftService.create(createNftDto, +req.user.id)
	}

	@Get()
	findAll() {
		return this.nftService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.nftService.findOne(+id)
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	update(@Param('id') id: string, @Body() updateNftDto: UpdateNftDto) {
		return this.nftService.update(+id, updateNftDto)
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	remove(@Param('id') id: string) {
		return this.nftService.remove(+id)
	}
}
