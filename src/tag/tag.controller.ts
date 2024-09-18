import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { TagService } from './tag.service'

@ApiTags('tag')
@Controller('tag')
export class TagController {
	constructor(private readonly tagService: TagService) {}

	@Post('create')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@UsePipes(new ValidationPipe())
	create(@Body() createTagDto: CreateTagDto) {
		return this.tagService.create(createTagDto)
	}

	@Get()
	findAll() {
		return this.tagService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.tagService.findOne(+id)
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
		return this.tagService.update(+id, updateTagDto)
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	remove(@Param('id') id: string) {
		return this.tagService.remove(+id)
	}
}
