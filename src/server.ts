/* eslint-disable prettier/prettier */
import 'dotenv/config';

import cors from '@fastify/cors';
import fastify from 'fastify';

import { memoriesRoutes } from './routes/memories';
import { authRoutes } from './routes/auth';

const app = fastify()

app.register(cors, {
  // origin: ['http://localhost:3333', 'url de deploy das aplicações frontend']
  origin: true,
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
