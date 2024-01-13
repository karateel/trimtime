import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
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
  const companyId = await prisma.company.findUnique({
    where: {
      owner: user.id
    }
  })

  const createdTeamMember = await prisma.barber.create({
      data: {
        first_name: '',
        role: '',
        instagram: '',
        email: '',
        last_name: '',
        company: {
          connect: {
            id: companyId?.id
          }
        }
      }
  })

  return createdTeamMember
})
