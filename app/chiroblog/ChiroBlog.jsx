"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/Card";

export default function ChiroBlog({ posts }) {
  const categories = Array.from(
    new Set(
      posts.flatMap((post) => post.categories?.map((cat) => cat.title) || []),
    ),
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ChiroBlog</h1>

      {/* Category Filter */}
      {categories.length > 0 && (
        <div className="mb-6 flex border rounded-lg overflow-hidden divide-x">
          <button className="px-3 py-1 text-center text-sm bg-gray-300 font-bold">
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-3 py-1 text-center text-sm bg-white"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => {
            const postSlug = post?.slug?.current;
            const postTitle = post?.title || "Untitled Post";
            const postDescription =
              post?.description || "No description available.";
            const postImage = post?.mainImage?.asset?.url;
            const postAlt = post?.mainImage?.alt || postTitle;
            const authorName = post?.author?.name || "Unknown Author";
            const authorImage = post?.author?.image?.asset?.url;
            const postDate = post?.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : "Unknown Date";

            const postCategories =
              post.categories?.map((cat) => cat.title) || [];

            return (
              <Card
                key={post._id}
                className="relative overflow-hidden transition-transform duration-300 hover:scale-105 rounded-lg h-[400px]"
              >
                <Link
                  href={`/chiroblog/${postSlug}`}
                  className="block h-full relative"
                >
                  {postImage ? (
                    <div className="absolute inset-0">
                      <Image
                        src={postImage}
                        alt={postAlt}
                        fill
                        objectFit="cover"
                        className="rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
                      <Image
                        src={"/images/logoBIG.png"}
                        alt="Post image"
                        fill
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    </div>
                  )}

                  {/* Categories in Top Right */}
                  {postCategories.length > 0 && (
                    <div className="absolute top-2 right-2 flex flex-wrap gap-1">
                      {postCategories.map((category, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium text-white bg-orange-600 rounded"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}

                  <CardContent className="absolute bottom-0 p-4 text-white w-full">
                    <h3 className="mb-2 font-semibold text-lg leading-6">
                      {postTitle}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-6">
                      {postDescription}
                    </p>
                    <div className="flex items-center gap-x-4 mt-4">
                      {authorImage ? (
                        <Image
                          src={authorImage}
                          alt={authorName}
                          className="h-8 w-8 rounded-full bg-gray-50"
                          width={32}
                          height={32}
                        />
                      ) : (
                        <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-sm text-gray-500">
                          ?
                        </div>
                      )}
                      <div className="text-sm">
                        <p className="font-semibold">{authorName}</p>
                        <time
                          dateTime={post.publishedAt}
                          className="text-gray-300"
                        >
                          {postDate}
                        </time>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
