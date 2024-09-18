import { Collection } from 'src/collection/entities/collection.entity'
import { Nft } from 'src/nft/entities/nft.entity'
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity()
export class User {
	// @ApiProperty()
	@PrimaryGeneratedColumn()
	id: number

	// @ApiProperty({ example: 'animakid24@test.com' })
	@Column()
	username: string

	// @ApiProperty({ example: 'test@gmail.com' })
	@Column()
	email: string

	// @ApiProperty({ example: '1234567' })
	@Column()
	password: string

	// @Column()
	// avatar: string

	// @ApiProperty({ example: 'my biography' })
	@Column({ nullable: true })
	bio: string

	// @Column()
	// links: string[]

	@OneToMany(() => Nft, (nft) => nft.creator, { onDelete: 'CASCADE' })
	createdNft: Nft[]

	@OneToMany(() => Nft, (nft) => nft.owner, { onDelete: 'CASCADE' })
	ownedNft: Nft[]

	@OneToMany(() => Collection, (collection) => collection.creator, {
		onDelete: 'CASCADE',
	})
	collection: Collection[]

	// @ApiProperty()
	@CreateDateColumn()
	createdAt: Date

	// @ApiProperty()
	@UpdateDateColumn()
	updatedAt: Date
}
