import { Controller, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('events')
export class EventController {
  public constructor(private readonly eventService: EventService) {}

  @Get()
  public get() {
    return this.eventService.get();
  }
}
