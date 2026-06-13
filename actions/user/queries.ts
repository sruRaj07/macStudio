'use server'

import { client } from '@/lib/prisma'

export const findUser = async (clerkId: string) => {
  return await client.user.findUnique({
    where: {
      clerkId,
    },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
          instagramId: true,
          instagramUsername: true,
          instagramDisplayName: true,
          instagramAvatarUrl: true,
        },
      },
    },
  })
}

export const createUser = async (
  clerkId: string,
  firstname: string | null,
  lastname: string | null,
  email: string
) => {
  return await client.user.upsert({
    where: {
      clerkId,
    },
    update: {
      email,
      firstname,
      lastname,
      subscription: {
        upsert: {
          create: {},
          update: {},
        },
      },
    },
    create: {
      clerkId,
      email,
      firstname,
      lastname,
      subscription: {
        create: {},
      },
    },
    select: {
      firstname: true,
      lastname: true,
    },
  })
}

export const updateSubscription = async (
  clerkId: string,
  props: { customerId?: string; plan?: 'PRO' | 'FREE' }
) => {
  return await client.user.update({
    where: {
      clerkId,
    },
    data: {
      subscription: {
        update: {
          data: {
            ...props,
          },
        },
      },
    },
  })
}
