import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';
import { ValidationError } from 'sequelize';

@Catch(ValidationError)
export class SequelizeValidationFilter implements ExceptionFilter {
  catch(exception: ValidationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const messages = exception.errors.map((err) => ({
      field: err.path,
      message: err.message,
    }));

    response.status(400).json({
      statusCode: 400,
      error: 'Bad Request',
      message: messages,
    });
  }
}
