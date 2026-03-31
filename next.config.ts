import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    '192.168.56.1',           // your specific IP
    '192.168.56.1:3000',      // with port (sometimes needed)
    // Add these if you also use localhost or other hosts:
    // 'localhost',
    // 'localhost:3000',
  ],
};

export default nextConfig;
