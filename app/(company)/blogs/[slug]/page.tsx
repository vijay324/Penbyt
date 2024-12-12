import { getPostData, getSortedPostsData } from "@/lib/api";
import BlogPostClient from "./BlogPostClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the `params` to extract `slug`
  const { slug } = await params;

  const postData = await getPostData(slug);

  // Handle cases where the post is not found
  if (!postData) {
    return notFound();
  }

  return <BlogPostClient postData={postData} />;
}
