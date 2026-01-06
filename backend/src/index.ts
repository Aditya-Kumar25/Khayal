import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/scripts/default-index.js';
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient();

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string;
  }
}>()


app.post('/api/v1/signup', (c) => {
  const prisma=new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  return c.text('Hello Hono!')
})

app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/v1/blog/blog', (c) => {
  return c.text('Hello Hono!')
})

export default app
