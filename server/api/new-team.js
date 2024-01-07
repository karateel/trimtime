import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // const exisingTeamMember = await prisma.barber.findUnique({
  //   where: {
  //     email: this.email
  //   }
  // })
  // if (exisingTeamMember) {
  //   return {
  //     statusCode: 400,
  //     body: {
  //       message: 'User with this email already exists.',
  //     },
  //   };
  // }

  const createdTeamMember = await prisma.barber.create({
      data: {
        first_name: '',
        role: '',
        instagram: '',
        email: '',
        last_name: ''
      }
  })

  return createdTeamMember
})
