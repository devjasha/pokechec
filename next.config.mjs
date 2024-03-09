/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData:
      '@import "./styles/mixins.scss", "./styles/_variables.scss";',
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/master/sprites/items/**",
      },
    ],
  },
};

export default nextConfig;
