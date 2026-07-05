// src/components/navbar/types.ts

export interface NavigationItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  badge?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface NavigationGroup {
  label: string;
  sections: NavigationSection[];
}
