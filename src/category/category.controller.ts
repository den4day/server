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
import { CategoryService } from './category.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@ApiTags('category')
@Controller('category')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Post('create')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	@UsePipes(new ValidationPipe())
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoryService.create(createCategoryDto)
	}

	@Get()
	findAll() {
		return this.categoryService.findAll()
	}

	@Get(':title')
	findOne(@Param('title') title: string) {
		return this.categoryService.findOne(title)
	}

	@Patch(':title')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	update(
		@Param('title') title: string,
		@Body() updateCategoryDto: UpdateCategoryDto,
	) {
		return this.categoryService.update(title, updateCategoryDto)
	}

	@Delete(':title')
	@UseGuards(JwtAuthGuard)
	@ApiBearerAuth()
	remove(@Param('title') title: string) {
		return this.categoryService.remove(title)
	}
}
