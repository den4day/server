import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateNftDto } from './dto/create-nft.dto'
import { UpdateNftDto } from './dto/update-nft.dto'
import { Nft } from './entities/nft.entity'

@Injectable()
export class NftService {
	constructor(
		@InjectRepository(Nft)
		private nftRepository: Repository<Nft>,
	) {}

	async create(createNftDto: CreateNftDto, creatorId: number) {
		const newNft = {
			title: createNftDto.title,
			description: createNftDto.description,
			price: createNftDto.price,
			bid: createNftDto.bid,
			auctionTime: createNftDto.auctionTime,
			creator: { id: creatorId },
			owner: { id: creatorId },
			collection: null,
			category: null,
		}

		if (!newNft) throw new BadRequestException('Something went wrong')

		return await this.nftRepository.save(newNft)
	}

	async findAll() {
		return await this.nftRepository.find()
	}

	async findOne(id: number) {
		const nft = await this.nftRepository.findOne({
			where: { id },
		})

		if (!nft) throw new NotFoundException('Nft not found')

		return nft
	}

	async update(id: number, updateNftDto: UpdateNftDto) {
		const nft = await this.nftRepository.findOne({
			where: { id },
		})

		if (!nft) throw new NotFoundException('Nft not found')

		await this.nftRepository.update(nft.id, updateNftDto)

		return 'Nft was updated'
	}

	async remove(id: number) {
		const nft = await this.nftRepository.findOne({
			where: { id },
		})

		if (!nft) throw new NotFoundException('Nft not found')

		await this.nftRepository.delete(nft.id)

		return 'Nft was deleted'
	}
}
