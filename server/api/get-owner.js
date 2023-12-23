import { PrismaClient } from '@prisma/client';
import { serverSupabaseUser} from "#supabase/server";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const getOwner = await prisma.owner.findUnique({
    where: {
      id: user.id,
    },
    select: {
      email: true,
      first_name: true,
      last_name: true
    }
  })

  return getOwner
})
