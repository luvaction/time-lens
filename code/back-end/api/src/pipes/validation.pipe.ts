// src/pipes/validation.pipe.ts
import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Value not provided');
    }
    // ... 추가적인 유효성 검사 로직이 들어갈 수 있습니다.
    return value;
  }
}
