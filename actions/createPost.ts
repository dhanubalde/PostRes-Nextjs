"use server"

// import { db } from "@/lib/db"
// import { revalidatePath } from "next/cache"


// export async function createPost(formData: FormData) { 
//   await db.post.create({
//     data: {
//       title: formData.get('title') as string,
//       content: formData.get('content') as string,
//     },
//   })
//   revalidatePath("/post")
// }