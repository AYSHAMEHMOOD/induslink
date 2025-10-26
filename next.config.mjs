/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: { // ✅ Fix the typo - was "devIndicator3"
    buildActivity: false,
  },
};

export default nextConfig;