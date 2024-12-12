import Header from "./components/Header";
import ScrollText from "./components/Scrolltext";
import { CardStackDemo } from "./components/Testimonials";
import Trust from "./components/trust";
import { getSortedPostsData } from "@/lib/api";
import BlogList from "./(company)/blogs/BlogList";

export default function Home() {
  const posts = getSortedPostsData();
  return (
    <>
      <Header />
      <Trust />
      <ScrollText />
      <CardStackDemo />

      <div className="w-full h-auto py-6 md:py-12 lg:py-20 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Our Blogs
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-zinc-800 dark:text-zinc-400 mt-2 md:mt-3 mb-8">
            How our resources have transformed student lives
          </p>
          <BlogList posts={posts} />
        </div>
      </div>
    </>
  );
}
