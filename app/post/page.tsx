
// import { createPost } from "@/actions/createPost"
import { getAllPost} from "@/actions/getData"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { db } from "@/lib/db"
import Link from "next/link"






const Post =  async () => {
  const user = await getAllPost()
  

  // const form = useForm<z.infer<typeof PostSchema>>({
  //   resolver: zodResolver(PostSchema),
  //   defaultValues: {
  //     title: "",
  //     content: "",
  //   },
  // })

  // const onSubmit = async (values: z.infer<typeof PostSchema>) => { 
  //   console.log(values);
  // }

  return (
    <div className=" mt-10 flex flex-col justify-center items-center space-y-6">
      <h1
      className=" text-3xl font-semibold"
      >All Post  ({user?.posts.length})
      </h1>
      <form action=""
        className=" space-y-5">
            <Input
              type="text"
              name="title"
              placeholder="title"
            />
            <Input
              type="text"
              name="content"
              placeholder="content"
            />
        <Button
          type="submit"
        >
          Submit
        </Button>
      </form>

      <ul className=" space-y-2">
        {user?.posts.map((post) => ( 
          <li key={post.id} className=" flex flex-col shadow-xl p-4 bg-slate-900 text-white rounded-md hover:bg-slate-800 cursor-pointer" >
            <Link href={`/post/${post.id}`} >
              <h2>{post.title}</h2>
            </Link> 
          </li>
        ))}
      </ul>
     
    </div>
  )
}

export default Post