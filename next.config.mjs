// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "placehold.co",
        },
        {
          protocol: "https",
          hostname: "refresh.church",
        },
        {
          protocol: "https",
          hostname: "registrations-production.s3.amazonaws.com",
        },
        {
          protocol: "https",
          hostname: "groups-production.s3.amazonaws.com",
        },
        {
          protocol: "https",
          hostname: "images.planningcenterusercontent.com",
        },
        {
          protocol: "https",
          hostname: "i.ytimg.com", // YouTube thumbnails
        },
      ],
      dangerouslyAllowSVG: true,
    },
    async redirects() {
      return [
        {
          source: '/merch',
          destination: 'https://refreshchurchmerch.myshopify.com/', // Replace with your actual Shopify store URL
          permanent: false, // Set to true if this should be a permanent redirect
        }
      ];
    },
  };
  
  export default nextConfig;
  