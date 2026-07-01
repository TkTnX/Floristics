import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { QueryType } from 'src/types';

@Controller('reviews')
export class ReviewController {
  public constructor(private readonly reviewService: ReviewService) {}

  @Get()
  public get(@Query() query: QueryType) {
    return this.reviewService.get(query);
  }

  @Get(':id')
  public getByProductId(@Param('id') id: string) {
    return this.reviewService.getByProductId(id);
  }
}
