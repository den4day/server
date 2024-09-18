import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateTagDto } from './dto/create-tag.dto'
import { UpdateTagDto } from './dto/update-tag.dto'
import { Tag } from './entities/tag.entity'

@Injectable()
export class TagService {
	constructor(
		@InjectRepository(Tag)
		private tagRepository: Repository<Tag>,
	) {}

	async create(createTagDto: CreateTagDto) {
		const newTag = {
			title: createTagDto.title,
			nfts: null,
		}

		if (!newTag) throw new BadRequestException('Something went wrong')

		return await this.tagRepository.save(newTag)
	}

	async findAll() {
		return await this.tagRepository.find()
	}

	async findOne(id: number) {
		const tag = await this.tagRepository.findOne({
			where: { id },
		})

		if (!tag) throw new NotFoundException('Tag not found')

		return tag
	}

	async update(id: number, updateTagDto: UpdateTagDto) {
		const tag = await this.tagRepository.findOne({
			where: { id },
		})

		if (!tag) throw new NotFoundException('Tag not found')

		await this.tagRepository.update(tag.id, updateTagDto)

		return 'Tag was updated'
	}

	async remove(id: number) {
		const tag = await this.tagRepository.findOne({
			where: { id },
		})

		if (!tag) throw new NotFoundException('Tag not found')

		await this.tagRepository.delete(tag.id)

		return 'Tag was deleted'
	}
}
