import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Subscription {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	// @Column()
	// follower:

	// @Column()
	// following:

	// 	followerId the user creating the follow
	// followingId the the user who is gaining the follower
}
