# UNICON TBV — Website

Website giới thiệu công ty CP Thương mại Kỹ thuật UNICON TBV, xây dựng bằng Next.js 15 (App
Router) + TypeScript + Tailwind CSS v4. Có 2 phiên bản ngôn ngữ: Tiếng Việt (`/vi`) và English (`/en`).

## Chạy local

```bash
npm install
cp .env.example .env.local   # trỏ NEXT_PUBLIC_API_BASE_URL về backend (mặc định http://localhost:8000)
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — tự động chuyển hướng sang `/vi` hoặc `/en`
tùy ngôn ngữ trình duyệt (mặc định `/vi` nếu không phát hiện được).

## Scripts

```bash
npm run lint     # ESLint
npm run build    # build production (kèm type-check)
npm run start    # chạy bản build
```

## Cấu trúc

- `src/app/[locale]/` — các trang theo từng ngôn ngữ: `/` (trang chủ), `/gioi-thieu`, `/du-an`,
  `/lien-he` — cùng 1 file phục vụ cả `/vi/...` và `/en/...`
- `src/middleware.ts` — phát hiện ngôn ngữ trình duyệt và redirect `/` → `/vi` hoặc `/en`
- `src/i18n/dictionaries/{vi,en}.ts` — **toàn bộ nội dung website** (nav, tiêu đề, mô tả dịch vụ,
  dự án, nhân sự, thiết bị, form liên hệ...), mỗi ngôn ngữ 1 file độc lập, cùng tuân theo type
  `Dictionary` trong `src/i18n/dictionary.ts` — sửa nội dung ở đây
- `src/i18n/assets.ts` — icon và đường dẫn ảnh (không đổi theo ngôn ngữ), khớp với dictionary qua
  trường `id`
- `src/components/` — `layout/` (Header/Footer/Section/LanguageSwitch), `ui/` (primitives dùng
  chung), và các thư mục theo tính năng (`home/`, `about/`, `services/`, `capabilities/`,
  `projects/`, `partners/`, `contact/`) — mỗi component nhận `dict` (và `locale` khi cần build
  link) qua props, không tự import nội dung
- `src/data/company.ts` — thông tin công ty không đổi theo ngôn ngữ (địa chỉ, SĐT, MST...)
- `src/lib/theme.ts` — bảng màu thương hiệu (navy + gold)
- `src/lib/api.ts` — gọi API backend cho form liên hệ

## Thêm ngôn ngữ mới

1. Thêm mã ngôn ngữ vào mảng `locales` trong `src/i18n/config.ts`.
2. Tạo file `src/i18n/dictionaries/<locale>.ts`, dịch toàn bộ field theo đúng type `Dictionary`
   (TypeScript sẽ báo lỗi nếu thiếu field nào).
3. Đăng ký file đó trong `src/i18n/dictionaries.ts`.

## Backend

Form liên hệ gọi tới backend FastAPI tại repo `unicon-tbv-be` (chạy song song ở cổng 8000 khi
dev). Backend gửi email qua Resend API (không dùng SMTP — nhiều nền tảng hosting chặn cổng SMTP)
tới hộp thư `unicontbv@gmail.com`, kèm `Reply-To` là email khách hàng đã điền. Xem README của
repo đó để biết cách chạy và cấu hình.

## Thay ảnh thật

Ảnh dự án và logo đối tác hiện là placeholder SVG tại `public/images/projects/` và
`public/images/partners/`. Khi có ảnh thật, thay file cùng tên (không cần sửa code — đường dẫn
được khớp qua `id` trong `src/i18n/assets.ts`).
