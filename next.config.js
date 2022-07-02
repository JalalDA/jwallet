/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env :{
    SERVER_HOST: "https://fazzpay.herokuapp.com",
    CLOUDINARY_URL : "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449"
  },
  images :{
    domains : ["res.cloudinary.com"]
  }
}

module.exports = nextConfig
