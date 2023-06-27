// src/controllers/test.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  UsePipes,
} from '@nestjs/common';
import { TestService } from '../services/test.service';
import { ValidationPipe } from '../pipes/validation.pipe';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest() {
    return this.testService.getTest();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTest(@Body('name') name: string): string {
    return this.testService.createTest(name);
  }

  @Put()
  updateTest() {
    return this.testService.updateTest();
  }

  @Patch()
  patchTest() {
    return this.testService.patchTest();
  }

  @Delete()
  deleteTest() {
    return this.testService.deleteTest();
  }
}
