/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
    'cdn2.iconfinder.com', 
    'ups.aopcdn.com', 
    'cdn.shopify.com', 
    'i.pinimg.com', 
    'ro.pinterest.com', 
    'images.unsplash.com',
    'm.media-amazon.com',
    'www.amazon.com',
    'ae01.alicdn.com',
    'www.thehatstore.com',
    'static.nike.com',
    'img01.ztat.net'
  ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['svg-inline-loader']
    });
    
    return config;
  },
};

module.exports = nextConfig
