import { Category } from 'src/category/entities/category.entity'
import { Collection } from 'src/collection/entities/collection.entity'
import { User } from 'src/user/entities/user.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Nft {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column()
	description: string

	@Column()
	price: number

	@Column()
	bid: number

	// @Column()
	// links: string[]

	@Column()
	auctionTime: number

	@ManyToOne(() => User, (user) => user.createdNft)
	@JoinColumn({ name: 'creator_id' })
	creator: User

	@ManyToOne(() => User, (user) => user.ownedNft)
	@JoinColumn({ name: 'owner_id' })
	owner: User

	@ManyToOne(() => Collection, (collection) => collection.nfts)
	@JoinColumn({ name: 'collection_id' })
	collection?: Collection

	@ManyToOne(() => Category, (category) => category.nfts)
	@JoinColumn({ name: 'category_id' })
	category?: Category

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
