import Link from "next/link";
import { client } from "../../sanity/lib/client"; // Import Sanity client

export default async function BlogPreview() {
  let blogs = [];

  try {
    blogs = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...3]{
        _id,
        title,
        "author": author->name,
        "authorImage": author->image.asset->url,
        publishedAt,
        "image": mainImage.asset->url
      }
    `);
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Bloglarımıza Göz Atın
        </h2>
        <p className="text-gray-600 mt-2">
          Her hafta yeni blog yazılarımızla arayı soğutmuyoruz.
        </p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Link key={blog._id} href={`/chiroblog`} className="block">
              <div
                className="relative rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transform hover:scale-105 transition duration-300 h-96"
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent), url(${
                    blog.image || "/images/logoBIG.png"
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0"></div>
                <div className="absolute bottom-0 p-6 text-white">
                  <p className="text-sm">
                    {new Date(blog.publishedAt).toLocaleDateString()} &middot;{" "}
                    {blog.author}
                  </p>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts available.</p>
        )}
      </div>
    </section>
  );
}
