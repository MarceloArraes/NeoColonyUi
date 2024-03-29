/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["svs.gsfc.nasa.gov"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "svs.gsfc.nasa.gov",
        // port: "",
        // pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
