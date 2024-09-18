import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateCollectionDto } from './dto/create-collection.dto'
import { UpdateCollectionDto } from './dto/update-collection.dto'
import { Collection } from './entities/collection.entity'

@Injectable()
export class CollectionService {
	constructor(
		@InjectRepository(Collection)
		private collectionRepository: Repository<Collection>,
	) {}

	async create(createCollectionDto: CreateCollectionDto, creatorId: number) {
		const newCollection = {
			title: createCollectionDto.title,
			creator: { id: creatorId },
			nfts: [...createCollectionDto.nfts],
		}

		if (!newCollection) throw new BadRequestException('Something went wrong')

		return await this.collectionRepository.save(newCollection)
	}

	async findAll(id: number) {
		const collection = await this.collectionRepository.find({
			where: {
				creator: { id },
			},
			order: {
				createdAt: 'DESC',
			},
		})

		return collection
	}

	async findOne(id: number) {
		const collection = await this.collectionRepository.findOne({
			where: { id },
		})

		if (!collection) throw new NotFoundException('Collection not found')

		return collection
	}

	async update(id: number, updateCollectionDto: UpdateCollectionDto) {
		const collection = await this.collectionRepository.findOne({
			where: { id },
		})

		if (!collection) throw new NotFoundException('Collection not found')

		await this.collectionRepository.update(collection.id, updateCollectionDto)

		return 'Collection was updated'
	}

	async remove(id: number) {
		const collection = await this.collectionRepository.findOne({
			where: { id },
		})

		if (!collection) throw new NotFoundException('Collection not found')

		await this.collectionRepository.delete(collection.id)

		return 'Collection was deleted'
	}
}
