/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["cdn.sanity.io", "doodleipsum.com"], // Allow Sanity images and DoodleIpsum avatars
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
