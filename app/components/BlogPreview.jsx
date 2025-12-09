import Link from "next/link";
import Image from "next/image";
import { client } from "../../sanity/lib/client";

export default async function BlogPreview() {
  let blogs = [];

  try {
    blogs = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...3]{
        _id,
        title,
        "slug": slug.current,
        "author": author->name,
        "authorImage": author->image.asset->url,
        publishedAt,
        mainImage {
          asset -> { url },
          alt
        }
      }
    `);
    
    // Debug: Check if blogs are fetched
    if (blogs && blogs.length > 0) {
      console.log("✅ BlogPreview: Successfully fetched", blogs.length, "blogs");
    } else {
      console.warn("⚠️ BlogPreview: No blogs found. Check Sanity connection and data.");
    }
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    console.error("Error details:", error.message);
    console.error("Stack:", error.stack);
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#acf48c]/5 to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Premium Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Bloglarımıza <span className="text-[#acf48c]">Göz Atın</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#acf48c] to-[#6EE7B7] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Her hafta yeni blog yazılarımızla sağlık ve wellness konularında
            güncel bilgiler paylaşıyoruz.
          </p>
        </div>

        {/* Premium Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <Link
                key={blog._id}
                href={`/chiroblog/${blog.slug || ""}`}
                className="group block h-full"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-2/3 overflow-hidden">
                    <Image
                      src={blog.mainImage?.asset?.url || "/images/logoBIG.png"}
                      alt={blog.mainImage?.alt || blog.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-900 shadow-lg">
                      {new Date(blog.publishedAt).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
                    {/* Author Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#acf48c] to-[#6EE7B7] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {blog.author?.charAt(0) || "C"}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {blog.author || "ChiroCare"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-[#acf48c] transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Read More Indicator */}
                    <div className="mt-4 flex items-center text-[#acf48c] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      <span>Devamını Oku</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#acf48c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                Henüz blog yazısı bulunmamaktadır.
              </p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {blogs.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/chiroblog"
              className="inline-flex items-center gap-2 bg-[#acf48c] text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Tüm Blogları Görüntüle
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
