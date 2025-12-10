import { client } from "../../../sanity/lib/client"; // Sanity client
import { postQuery, postSlugsQuery } from "../../../sanity/lib/queries"; // Query for fetching posts
import Post from "./Post"; // Import Post component
import BlogLayout from "../../components/BlogLayout"; // Import the layout
import PropTypes from "prop-types"; // Import PropTypes for validation
import { notFound } from "next/navigation"; // Handle not found pages
import BackgroundWrapper from "@/app/components/BackgroundWrapper";

export const revalidate = 60; // Enable revalidation every 60 seconds

// Generate static params for all posts
export async function generateStaticParams() {
  if (!client) {
    console.warn("Sanity client not configured, returning empty array");
    return [];
  }
  
  try {
    const posts = await client.fetch(postSlugsQuery);
    if (!posts || !Array.isArray(posts)) {
      return [];
    }
    return posts
      .filter((post) => post?.slug) // Filter out posts without slugs
      .map((post) => ({
        slug: post.slug,
      }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// ✅ Fetch post dynamically for each page
export default async function Page({ params }) {
  if (!params?.slug) {
    console.error("❌ No slug provided in params");
    return notFound();
  }

  let post;
  try {
    post = await client.fetch(postQuery, { slug: params.slug });

    if (!post || !post.title) {
      console.error("❌ Invalid post data:", post);
      return notFound();
    }

    console.log("✅ Successfully fetched post:", post);
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return notFound();
  }

  return (
    <BackgroundWrapper>
      <BlogLayout>
        <Post post={post} />
      </BlogLayout>
    </BackgroundWrapper>
  );
}

// ✅ PropTypes validation
Page.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
};
