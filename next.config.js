/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datasets-server.huggingface.co",
        port: "",
      },
    ],
  },

  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
