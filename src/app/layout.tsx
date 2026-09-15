import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | ${company.nameVi}`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "UNICON TBV - Công ty Cổ phần Thương mại Kỹ thuật chuyên thiết kế, thi công hệ thống cơ điện (M&E): điện, điều hòa thông gió, cấp thoát nước, điện nhẹ, phòng cháy chữa cháy.",
  keywords: [
    "UNICON TBV",
    "thi công cơ điện",
    "M&E",
    "MEP",
    "điện nước công nghiệp",
    "phòng cháy chữa cháy",
  ],
  metadataBase: new URL("https://unicontbv.vn"),
  openGraph: {
    title: `${company.shortName} | ${company.nameVi}`,
    description: company.motto,
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
