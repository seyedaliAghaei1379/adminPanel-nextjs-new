/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/adminPanel-nextjs-new" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/adminPanel-nextjs-new/" : "",
};

export default nextConfig;
