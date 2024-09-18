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
import { CollectionService } from './collection.service'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'

@ApiTags('collection')
@Controller('collection')
export class CollectionController {
	constructor(private readonly collectionService: CollectionService) {}

	@Post('create')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@UsePipes(new ValidationPipe())
	create(@Body() createCollectionDto: CreateCollectionDto, @Req() req) {
		return this.collectionService.create(createCollectionDto, +req.user.id)
	}

	@Get()
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	findAll(@Req() req) {
		return this.collectionService.findAll(+req.user.id)
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.collectionService.findOne(+id)
	}

	@Patch(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	update(
		@Param('id') id: string,
		@Body() updateCollectionDto: UpdateCollectionDto,
	) {
		return this.collectionService.update(+id, updateCollectionDto)
	}

	@Delete(':id')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	remove(@Param('id') id: string) {
		return this.collectionService.remove(+id)
	}
}
