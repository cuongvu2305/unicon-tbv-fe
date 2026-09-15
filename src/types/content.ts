import type { LucideIcon } from "lucide-react";

export interface CompanyInfo {
  nameVi: string;
  nameEn: string;
  shortName: string;
  since: string;
  motto: string;
  address: string;
  phone: string;
  email: string;
  legalRepresentative: string;
  legalRepresentativeTitle: string;
  taxCode: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CoreValue {
  letter: "T" | "B" | "V";
  titleVi: string;
  titleEn: string;
  description: string;
}

export interface OrgDepartment {
  name: string;
}

export interface OrgChart {
  director: string;
  departments: OrgDepartment[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface PersonnelRow {
  discipline: string;
  qualification: string;
  headcount: number;
}

export interface EquipmentItem {
  name: string;
  quantity: number | string;
}

export interface Project {
  id: string;
  name: string;
  scopeOfWork: string;
  image: string;
}
