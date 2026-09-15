import type { PersonnelRow } from "@/types/content";

export const personnel: PersonnelRow[] = [
  { discipline: "Kỹ sư xây dựng dân dụng và công nghiệp", qualification: "Đại học", headcount: 3 },
  { discipline: "Kỹ sư Cơ khí", qualification: "Đại học", headcount: 2 },
  { discipline: "Kỹ sư cấp thoát nước", qualification: "Đại học", headcount: 1 },
  { discipline: "Kỹ sư xây dựng", qualification: "Đại học", headcount: 2 },
  { discipline: "Kỹ sư kỹ thuật điện", qualification: "Đại học", headcount: 2 },
  { discipline: "Kỹ sư Nhiệt - Điện lạnh", qualification: "Đại học", headcount: 2 },
  { discipline: "Nhân viên văn phòng", qualification: "Đại học", headcount: 2 },
  { discipline: "Lao động phổ thông", qualification: "Trung cấp nghề", headcount: 20 },
];

export const personnelTotal = personnel.reduce((sum, row) => sum + row.headcount, 0);
