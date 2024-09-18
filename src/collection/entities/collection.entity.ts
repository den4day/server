import { Nft } from 'src/nft/entities/nft.entity'
import { User } from 'src/user/entities/user.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Collection {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@OneToMany(() => Nft, (nft) => nft.collection)
	@JoinColumn({ name: 'nft_id' })
	nfts: Nft[]

	@ManyToOne(() => User, (user) => user.collection)
	@JoinColumn({ name: 'creator_id' })
	creator: User

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date
}
