/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 允許外部圖片來源（依你的 photo.js 內容調整）
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
