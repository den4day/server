import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CreateSubscriptionDto } from './dto/create-subscription.dto'
import { UpdateSubscriptionDto } from './dto/update-subscription.dto'
import { SubscriptionService } from './subscription.service'

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionController {
	constructor(private readonly subscriptionService: SubscriptionService) {}

	@Post()
	create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
		return this.subscriptionService.create(createSubscriptionDto)
	}

	@Get()
	findAll() {
		return this.subscriptionService.findAll()
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.subscriptionService.findOne(+id)
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateSubscriptionDto: UpdateSubscriptionDto,
	) {
		return this.subscriptionService.update(+id, updateSubscriptionDto)
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.subscriptionService.remove(+id)
	}
}
