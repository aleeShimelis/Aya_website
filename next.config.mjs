import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isProduction = process.env.NODE_ENV === "production";
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isProduction ? "" : "'unsafe-eval'",
  "https://challenges.cloudflare.com"
]
  .filter(Boolean)
  .join(" ");
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  scriptSrc,
  "connect-src 'self' https://challenges.cloudflare.com",
  "frame-src 'self' https://www.google.com https://www.google.com/maps https://challenges.cloudflare.com",
  "form-action 'self'",
  "upgrade-insecure-requests"
].join("; ");
const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), browsing-topics=()"
  },
  ...(isProduction
    ? [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }]
    : [])
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    qualities: [75, 90]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
