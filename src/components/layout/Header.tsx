"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Lĩnh vực hoạt động", href: "/#linh-vuc-hoat-dong" },
  { label: "Năng lực", href: "/#nang-luc" },
  { label: "Dự án", href: "/du-an" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur supports-[backdrop-filter]:bg-navy-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant="light" />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-white/90"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            {company.phone}
          </a>
          <Button href="/lien-he" className="!px-5 !py-2.5 !text-xs">
            Liên hệ ngay
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button href="/lien-he" className="mt-4 w-full">
            Liên hệ ngay
          </Button>
        </div>
      )}
    </header>
  );
}
