import { PrismaClient } from '@prisma/client';
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);

    if (!user) {
      return sendError(event, createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      }));
    }

    const existingOwner = await prisma.owner.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!existingOwner) {
      return {
        statusCode: 400,
        body: {
          message: 'Owner does not exist.',
        },
      };
    }

    const companyData = {
      name: event.body.name || '',
      owner: user.id,
    };

    const createdCompany = await prisma.company.create({
      data: companyData,
    });

    return createdCompany;
  } catch (error) {
    console.error('Error creating company:', error);
    return {
      statusCode: 500,
      body: {
        message: 'Internal server error',
      },
    };
  }
});
