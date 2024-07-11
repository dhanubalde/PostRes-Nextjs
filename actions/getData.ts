"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const getAllPost = async () => { 
  const user = await db.user.findUnique({
    where: {
      email: "dhan@gmail.com",
    },
    include: {
      posts: true,
    },
  })
  revalidatePath("/post")
  return user
}

