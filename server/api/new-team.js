import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const createdTeam = await prisma.barber.create({
      data: {
        first_name: 'test',
        last_name: '',
        email: event.context.params?.email,
      }
  })
})
