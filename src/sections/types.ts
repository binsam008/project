import { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  id?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  expertise: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: ReactNode;
  title: string;
  content: string;
  href: string;
}