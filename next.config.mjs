// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['placehold.co', 'example.com', 'another-example.com', 'refresh.church', 'registrations-production.s3.amazonaws.com', 'groups-production.s3.amazonaws.com', 'images.planningcenterusercontent.com'],
      dangerouslyAllowSVG: true,
    },
  };
  
  export default nextConfig;
  