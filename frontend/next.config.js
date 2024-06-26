/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        NEXT_PUBLIC_BACKEND_SERVER_URL:
            process.env.NEXT_PUBLIC_BACKEND_SERVER_URL,
        NEXT_PUBLIC_BACKEND_CLIENT_URL:
            process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL,
    },
};

module.exports = nextConfig;
