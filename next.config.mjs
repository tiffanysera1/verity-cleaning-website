/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a plain /out folder that can be hosted anywhere
  // (Vercel, Netlify, bwpsites, S3, etc.). No Node server required.
  output: 'export',
  images: {
    // next/image optimization requires a server; disable it for static export.
    unoptimized: true,
  },
  // Emit /about/index.html style paths so static hosts resolve routes cleanly.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
