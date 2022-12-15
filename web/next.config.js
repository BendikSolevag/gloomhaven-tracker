/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.sanity.io"],
        loader: "custom",
        unoptimized: true,
    },
};

module.exports = nextConfig;
