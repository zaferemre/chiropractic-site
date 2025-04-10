import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../../sanity/lib/client";
import ChiroBlog from "./chiroBlog";
import BackgroundWrapper from "../components/BackgroundWrapper";
export default async function Home() {
  let posts = [];

  try {
    posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc){
        title,
        slug,
        publishedAt,
        description,
        mainImage {
          asset -> { url },
          alt
        },
        author -> {
          name,
          image {
            asset -> { url }
          }
        },
        categories[]-> { title }
      }`);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <BackgroundWrapper>
      <div className="min-h-screen text-black relative pt-16">
        {/* Header */}
        <Header />

        {/* Ensure MDBlog receives posts correctly */}
        {posts.length > 0 ? (
          <ChiroBlog posts={posts} />
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No blog posts available.
          </p>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </BackgroundWrapper>
  );
}
