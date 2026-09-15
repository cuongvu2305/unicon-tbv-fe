import { Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section variant="light" className="!py-32 text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-600">404</span>
      <h1 className="mt-3 text-3xl font-extrabold text-navy-900 sm:text-4xl">
        Không tìm thấy trang
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-navy-600">
        Trang bạn tìm không tồn tại hoặc đã được di chuyển. Hãy quay về trang chủ để tiếp tục.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">
          <Home className="h-4 w-4" />
          Về trang chủ
        </Button>
      </div>
    </Section>
  );
}
