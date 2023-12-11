/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
   output:'export',
   distDir:'dist',
   experimental: {
    images: true,
    
  },

   
 // Add basePath 
 //basePath: '/github-pages',

}



module.exports = nextConfig
