import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const team = await prisma.barber.findMany({
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      instagram: true,
      role: true
    }
  })
  return team
})
