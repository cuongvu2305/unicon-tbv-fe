# UNICON TBV — Website

Website giới thiệu công ty CP Thương mại Kỹ thuật UNICON TBV, xây dựng bằng Next.js 15 (App
Router) + TypeScript + Tailwind CSS v4.

## Chạy local

```bash
npm install
cp .env.example .env.local   # trỏ NEXT_PUBLIC_API_BASE_URL về backend (mặc định http://localhost:8000)
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run lint     # ESLint
npm run build    # build production (kèm type-check)
npm run start    # chạy bản build
```

## Cấu trúc

- `src/app/` — các trang: `/` (trang chủ), `/gioi-thieu`, `/du-an`, `/lien-he`
- `src/components/` — `layout/` (Header/Footer/Section), `ui/` (primitives dùng chung), và các
  thư mục theo tính năng (`home/`, `about/`, `services/`, `capabilities/`, `projects/`,
  `partners/`, `contact/`)
- `src/data/` — toàn bộ nội dung công ty (dạng TypeScript, typed) — sửa nội dung ở đây
- `src/lib/theme.ts` — bảng màu thương hiệu (navy + gold)
- `src/lib/api.ts` — gọi API backend cho form liên hệ

## Backend

Form liên hệ gọi tới backend FastAPI tại repo `unicon-tbv-be` (chạy song song ở cổng 8000 khi
dev). Backend đăng nhập vào `unicontbv@gmail.com` qua SMTP (cần Gmail App Password) và gửi email
tới chính hộp thư đó, kèm `Reply-To` là email khách hàng đã điền. Xem README của repo đó để biết
cách chạy và cấu hình.

## Thay ảnh thật

Ảnh dự án và logo đối tác hiện là placeholder SVG tại `public/images/projects/` và
`public/images/partners/`. Khi có ảnh thật, thay file cùng tên (hoặc cập nhật đường dẫn trong
`src/data/projects.ts` / `src/data/partners.ts`).
