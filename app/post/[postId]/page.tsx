


import { getAllPost } from "@/actions/getData"
import { db } from "@/lib/db"
import Link from "next/link"


interface PostProps { 
  params: { postId: string }
}


const page = async({ 
  params,
}: PostProps) => {
  const user = await getAllPost()
  const posts = await db.post.findUnique({
    where: {
      id: params.postId
    }
  })


  return (
    <div className=" h-full justify-center items-center flex flex-col ">
      <div className="flex flex-col justify-center items-center shadow-xl p-2 bg-slate-900 text-white rounded-md hover:bg-slate-800">
      <h1 >
          {posts?.title}
      </h1>
        <span>By :{user?.email}</span>
      </div>
        <p className=" text-3xl">{posts?.content}</p>
      <Link href="/post" className="underline mt-6">Go to Post</Link>
    </div>
  )
}

export default page