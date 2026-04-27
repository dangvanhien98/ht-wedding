import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Dòng này cực kỳ quan trọng để xuất web tĩnh
  images: {
    unoptimized: true, // Bắt buộc nếu dùng 'output: export' vì Next.js không thể tối ưu ảnh phía server khi xuất tĩnh
  },
  allowedDevOrigins: ['192.168.88.171'],
};

export default nextConfig;
