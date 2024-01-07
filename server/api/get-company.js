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
        statusCode: 404,
        body: {
          message: 'Owner not found.',
        },
      };
    }

    const company = await prisma.company.findFirst({
      where: {
        owner: user.id,
      },
    });

    if (!company) {
      return {
        statusCode: 404,
        body: {
          message: 'Company not found for this owner.',
        },
      };
    }

    return company;
  } catch (error) {
    console.error('Error retrieving company:', error);
    return {
      statusCode: 500,
      body: {
        message: 'Internal server error',
      },
    };
  }
});
