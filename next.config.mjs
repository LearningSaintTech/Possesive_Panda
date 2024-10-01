/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['crm.learningsaint.com', 'another-domain.com'], // Add more domains as needed
  },
  reactStrictMode: true,  // Enable React strict mode
  swcMinify: true,  // Enable SWC-based minification for faster builds
  async redirects() {
    return [
      {
        source: '/services/social-media-management',
        destination: '/services/social-media-marketing',
        permanent: true, // Set to true if the change is permanent (301 redirect)
      },
      {
        source: '/services/social-media',
        destination: '/services/social-media-marketing',
        permanent: true, // Set to true if the change is permanent (301 redirect)
      },
      {
        source: '/services/real-estate',
        destination: '/services/real-estate-virtual-assistant',
        permanent: true, // Set to true if the change is permanent (301 redirect)
      },
    ]
  },
}

export default nextConfig;
