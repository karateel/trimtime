import { PrismaClient } from '@prisma/client';
import { serverSupabaseUser } from '#supabase/server';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    if (!user) {
      throw new Error('Unauthorized access');
    }

    const { name } = await readBody(event)

    if (!name) {
      throw createError({
        statusCode: '500',
        statusMessage: 'Company name is required.',
        data: {
          myCustomField: true,
          message: 'Company name is required.'
        }
      })
    }

    const isCompanyExist = await prisma.company.findFirst({
      where: {
        name: name
      }
    })

    if (isCompanyExist) {
      throw createError({
        statusCode: '500',
        statusMessage: 'Company with this name already exists.',
        data: {
          myCustomField: true,
          message: 'Company with this name already exists.'
        }
      })
    }

    return await prisma.company.create({
      data: {
        name: name,
        owner: user.id
      },
    });

  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
});
