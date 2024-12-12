"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogPostClientProps {
  postData: {
    title: string;
    date: string;
    image: string;
    contentHtml: string;
    urlTitle?: string;
    url?: string;
    author: string;
  };
}

export default function BlogPostClient({ postData }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center pt-24">
      <div className="max-w-3xl w-full px-4 py-8">
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
          {postData.date}
        </p>
        <h1 className="text-4xl font-bold mb-6 dark:text-zinc-200">
          {postData.title}
        </h1>
        {postData.urlTitle && postData.url && (
          <div className="flex space-x-4 mb-8">
            <Link
              href={postData.url}
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Try {postData.urlTitle.split(":")[0]}
            </Link>
          </div>
        )}
        <Image
          src={postData.image}
          alt={postData.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-xl mb-8"
        />
        <div
          className="prose prose-lg dark:prose-invert text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-300">
          By {postData.author}
        </p>
      </div>
    </div>
  );
}
