import { PrismaClient } from '@prisma/client';
import { serverSupabaseUser } from "#supabase/server";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const user = await serverSupabaseUser(event);
    const { first_name, last_name, role, instagram, email, phone, avatar_url, address } = await readBody(event);
    const getCompany = await prisma.company.findFirst({
      where: {
        owner: user.id
      }
    });
    if (!getCompany) {
      throw new Error("Company not found for the user");
    }

    return await prisma.barber.create({
      data: {
        first_name: first_name,
        role: role,
        instagram: instagram,
        email: email,
        last_name: last_name,
        phone: phone,
        avatar_url: avatar_url,
        address: address,
        company: {
          connect: {
            id: getCompany.id
          }
        }
      }
    });
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: e.message
    })
  } finally {
    await prisma.$disconnect();
  }
});
