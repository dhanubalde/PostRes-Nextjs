import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-full flex flex-col items-center justify-center space-y-6">
      <h1 className=" text-4xl font-semibold">Blog post </h1>
      <Link
        href="/post"
        className="underline transition-all"
      >
      Go to Post
      </Link>
    </div>
  );
}
