import { Nft } from 'src/nft/entities/nft.entity'
import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@ManyToMany(() => Nft)
	@JoinTable()
	nfts?: Nft[]
}
