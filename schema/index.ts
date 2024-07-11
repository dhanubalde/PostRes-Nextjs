
import { z } from "zod"

export const PostSchema = z.object({
  title: z.string().min(5, "you have atleast 5 characters").max(100),
  content: z.string().min(1, ).max(1000)
  // image: z.string().url(),
  // author: z.string().min(3, "you have atleast 3 characters").max(50),

})
