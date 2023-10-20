/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placekitten.com'], // An empty array means images from any domain are allowed.
  },
}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['images.unsplash.com'], // An empty array means images from any domain are allowed.
//   },
// };

