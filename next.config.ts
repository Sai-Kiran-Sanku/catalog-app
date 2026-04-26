import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "stimg.cardekho.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "digitalassets.tesla.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.royalenfield.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.dell.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.bikedekho.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.amd.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images10.gaadi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static3.toyotabharat.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mos.cms.futurecdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-s3.autocarindia.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "amateurphotographer.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cnet.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
