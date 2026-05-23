/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 👈 Matches any domain on the internet
      },
      {
        protocol: 'http',
        hostname: '**', // 👈 Optional: Also matches older unencrypted http sites
      },
    ],
  },
};

export default nextConfig;
