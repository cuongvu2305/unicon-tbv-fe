import { Zap, Wind, Droplets, Wifi, FlameKindling } from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "dien-dong-luc",
    title: "Hệ thống Điện động lực - Điện chiếu sáng",
    description:
      "Thiết kế, thi công hệ thống điện động lực và chiếu sáng cho nhà máy, nhà xưởng và công trình dân dụng, đảm bảo an toàn và tối ưu vận hành.",
    icon: Zap,
  },
  {
    id: "dieu-hoa-thong-gio",
    title: "Hệ thống Điều hòa không khí - Thông gió",
    description:
      "Cung cấp giải pháp HVAC toàn diện, từ tính toán tải nhiệt đến lắp đặt và vận hành hệ thống điều hòa, thông gió công nghiệp.",
    icon: Wind,
  },
  {
    id: "cap-thoat-nuoc",
    title: "Hệ thống Cấp thoát nước",
    description:
      "Thi công hệ thống cấp nước sinh hoạt, thoát nước thải và thoát nước mưa, bao gồm cả công nghệ thoát nước mưa Siphonic.",
    icon: Droplets,
  },
  {
    id: "dien-nhe",
    title: "Hệ thống Điện nhẹ",
    description:
      "Triển khai hệ thống Camera an ninh, mạng Internet, điện thoại nội bộ và truyền hình cho công trình văn phòng, nhà máy.",
    icon: Wifi,
  },
  {
    id: "pccc",
    title: "Hệ thống Phòng cháy chữa cháy",
    description:
      "Thiết kế và thi công hệ thống PCCC đạt chuẩn, đảm bảo an toàn tối đa cho con người và tài sản trong công trình.",
    icon: FlameKindling,
  },
];
