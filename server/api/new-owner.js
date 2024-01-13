import { PrismaClient } from '@prisma/client'
import { serverSupabaseUser } from '#supabase/server'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    if(!user) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      }))
    }

    const existingUser = await prisma.owner.findUnique({
      where: {
        id: user.id,
      },
    });

    if (existingUser) {
      return {
        statusCode: 400,
        body: {
          message: 'User with this email already exists.',
        },
      };
    }

    return await prisma.owner.create({
      data: {
        id: user.id,
        email: user.email,
        first_name: user.user_metadata?.first_name,
        last_name: user.user_metadata?.last_name
      }
    })
  } catch (error){
    console.error('Error creating owner:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
});

