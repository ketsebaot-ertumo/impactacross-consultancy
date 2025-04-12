/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-src 'self' https://www.youtube.com; object-src 'none';",
            },
          ],
        },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        // Google Drive
        // {
        //   protocol: 'https',
        //   hostname: 'drive.google.com',
        //   pathname: '/uc?id=*',
        // },
        {
          protocol: 'https',
          hostname: 'drive.google.com',
          pathname: '/**',
        }
      ],
    },
  };
  
  export default nextConfig;
  