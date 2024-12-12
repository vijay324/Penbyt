// app/(company)/blogs/BlogList.tsx
import Link from "next/link";
import Image from "next/image";

type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  url: string;
  urlTitle: string;
};

type BlogListProps = {
  posts?: Post[]; // Make posts optional
};

export default function BlogList({ posts = [] }: BlogListProps) {
  // Default to empty array if not provided
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">
          No blog posts available.
        </p>
      ) : (
        posts.map((post) => (
          <Link
            href={`/blogs/${post.slug}`}
            key={post.slug}
            className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-full"
              style={{ height: "auto" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <div className="flex items-center justify-between text-gray-300 text-sm mb-2">
                <p>
                  {post.date} · {post.author}
                </p>
              </div>
              <h2 className="text-white text-xl font-semibold">{post.title}</h2>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
