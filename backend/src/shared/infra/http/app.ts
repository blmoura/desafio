import 'reflect-metadata'
import '../typeorm'
import 'express-async-errors'

import swaggerUI from 'swagger-ui-express'
import express, { NextFunction, Request, Response } from 'express'

import swaggerFile from '../../../swagger.json'
import { router } from './routes'
import { AppError } from '../../errors/AppError'

const app = express()
app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    message: `Internal server error - ${err.message}`
  })
})

export { app }
