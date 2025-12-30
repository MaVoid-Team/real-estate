/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/real-estate",
  assetPrefix: "/real-estate/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
