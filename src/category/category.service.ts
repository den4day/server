import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { Category } from './entities/category.entity'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private categoryRepository: Repository<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto) {
		const isExist = await this.categoryRepository.findBy({
			title: createCategoryDto.title,
		})

		if (isExist.length)
			throw new BadRequestException('This category already exist')

		const newCategory = {
			title: createCategoryDto.title,
		}

		return await this.categoryRepository.save(newCategory)
	}

	async findAll() {
		return await this.categoryRepository.find({
			relations: {
				nfts: true,
			},
		})
	}

	async findOne(title: string) {
		const category = await this.categoryRepository.findOne({
			where: { title },
			relations: { nfts: true },
		})

		if (!category) throw new NotFoundException('Category not found')

		return category
	}

	async update(title: string, updateCategoryDto: UpdateCategoryDto) {
		const category = await this.categoryRepository.findOne({
			where: { title },
			relations: { nfts: true },
		})

		if (!category) throw new NotFoundException('Category not found')

		await this.categoryRepository.update(category.id, updateCategoryDto)

		return 'Category was updated'
	}

	async remove(title: string) {
		const category = await this.categoryRepository.findOne({
			where: { title },
			relations: { nfts: true },
		})

		if (!category) throw new NotFoundException('Category not found')

		await this.categoryRepository.delete(category.id)

		return 'Category was deleted'
	}
}
