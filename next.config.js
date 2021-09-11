/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['m.media-amazon.com', 'imdb-api.com'],
  },
  reactStrictMode: true,
  env: {
    APP_NAME: "My Movie",
    API_END_POINT: "https://api.nextkanji.com"
  }
}
