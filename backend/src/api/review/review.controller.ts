import { Controller, Get, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { QueryType } from 'src/types';

@Controller('reviews')
export class ReviewController {
  public constructor(private readonly reviewService: ReviewService) {}

  @Get()
  public get(@Query() query: QueryType) {
    return this.reviewService.get(query);
  }
}
