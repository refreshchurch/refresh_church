// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placehold.co', 'example.com', 'another-example.com', 'refresh.church', 'registrations-production.s3.amazonaws.com', 'groups-production.s3.amazonaws.com', 'images.planningcenterusercontent.com'],
      dangerouslyAllowSVG: true,
    },
    async redirects() {
      return [
        {
          source: '/merch',
          destination: 'https://your-shopify-store-url.com', // Replace with your actual Shopify store URL
          permanent: false, // Set to true if this should be a permanent redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  