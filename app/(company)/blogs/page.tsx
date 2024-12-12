import BlogList from "./BlogList";
import { getSortedPostsData } from "@/lib/api";
import Header from "./Header";

export default function BlogsPage() {
  const posts = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <BlogList posts={posts} />
    </div>
  );
}
