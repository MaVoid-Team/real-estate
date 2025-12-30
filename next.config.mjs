/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/real-estate",
  assetPrefix: "/real-estate/",

  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
};

export default nextConfig;
