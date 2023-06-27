// src/services/test.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): string {
    return 'Test GET!';
  }

  createTest(name: string): string {
    // Typically, you would handle creating a new resource here.
    return `Test POST, ${name}!`;
  }

  updateTest(): string {
    // Typically, you would handle updating a resource here.
    return 'Test PUT!';
  }

  patchTest(): string {
    // Typically, you would handle patching a resource here.
    return 'Test PATCH!';
  }

  deleteTest(): string {
    // Typically, you would handle deleting a resource here.
    return 'Test DELETE!';
  }
}
