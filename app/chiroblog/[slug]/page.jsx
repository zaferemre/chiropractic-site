import { client } from "../../../sanity/lib/client"; // Sanity client
import { postQuery, postSlugsQuery } from "../../../sanity/lib/queries"; // Query for fetching posts
import Post from "./Post"; // Import Post component
import BlogLayout from "../../components/BlogLayout"; // Import the layout
import PropTypes from "prop-types"; // Import PropTypes for validation
import { notFound } from "next/navigation"; // Handle not found pages
import BackgroundWrapper from "@/app/components/BackgroundWrapper";

// Generate static params for all posts
// Required for output: export - must always return a valid array
export async function generateStaticParams() {
  // Early return if client is not configured
  if (!client) {
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
    // Return empty array on error to allow static export
    // This prevents build failures when Sanity is not configured
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
