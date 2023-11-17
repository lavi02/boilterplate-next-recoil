/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        nextScriptWorkers: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production"
    },
    async headers() {
        return [{
            source: '/(.*)',
            headers: [{
                key: 'Access-Control-Allow-Origin',
                value: '*',
            }, ],
        }, ];
    },
};

module.exports = nextConfig;