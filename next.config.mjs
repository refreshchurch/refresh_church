// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placehold.co', 'example.com', 'another-example.com'],
      dangerouslyAllowSVG: true,
    },
  };
  
  export default nextConfig;
  