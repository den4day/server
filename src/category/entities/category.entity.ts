import { Nft } from 'src/nft/entities/nft.entity'
import {
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@OneToMany(() => Nft, (nft) => nft.category)
	@JoinColumn()
	nfts: Nft[]
}
