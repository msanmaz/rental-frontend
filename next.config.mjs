import path from 'path'
/** @type {import('next').NextConfig} */

const __dirname = new URL('.', import.meta.url).pathname;
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, 'src'),
      };
      return config;
    },
  };
  
  export default nextConfig;
  