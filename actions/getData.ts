"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"


export const getAllPost = async () => { 
  const user = await db.user.findUnique({
    where: {
      email: "kedan@gmail.com",
    },
    include: {
      posts: true,
    },
  })
  revalidatePath("/post")
  return user
}

export const getPostById = async (
  params: {postId: string}
) => { 
  const post = await db.post.findUnique({
    where: {
      id: params.postId
    },
  })
  return post
}

