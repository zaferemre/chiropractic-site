/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "doodleipsum.com"], // Allow Sanity images and DoodleIpsum avatars
  },
};

export default nextConfig;
