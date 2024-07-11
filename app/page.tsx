import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-6">
      <h1 className=" text-4xl font-semibold">Blog post </h1>
      <Link
        href="/post"
        className="transition-all bg-black p-3 px-4 rounded-md text-white hover:bg-black/80 shadow-xl"
      >
      Go to Post
      </Link>
    </div>
  );
}
