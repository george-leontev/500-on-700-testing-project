import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
        return [
            {
                source: '/',
                destination: '/news',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
