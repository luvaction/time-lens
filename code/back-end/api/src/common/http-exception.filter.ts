// http-exception.filter.ts

import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status = exception.getStatus();
      
      // customize the error response
      const errorResponse = {
        statusCode: status, // HTTP 상태 코드
        timestamp: new Date().toISOString(), // 현재 시간 ISO
        path: request.url, // 요청 URL
        method: request.method, // 요청된 HTTP 메소드
        message: exception.message || null, // 예외가 발생했을 때 예외에서 반환하는 메시지
        error: exception.message || null, // 예외가 발생했을 때 예외에서 반환하는 메시지
        data: exception.getResponse() || null, // 예외가 발생했을 때 예외에서 반환하는 응답 데이터
      };
      
      
      response.status(status).json(errorResponse);
    }
  }
  