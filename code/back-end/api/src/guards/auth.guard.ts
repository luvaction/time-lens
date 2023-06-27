// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // Add your authentication logic here.
    // For example, you can check if the request has a valid user authenticated.
    return true;
  }
}
