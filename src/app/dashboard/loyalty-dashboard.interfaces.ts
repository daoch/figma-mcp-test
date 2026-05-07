export interface SidebarLink {
  readonly label: string;
  readonly badge?: string;
  readonly badgeVariant?: 'count' | 'status';
  readonly active?: boolean;
  readonly indented?: boolean;
}

export interface SidebarSection {
  readonly title?: string;
  readonly highlighted?: boolean;
  readonly links: readonly SidebarLink[];
}

export interface TopNavItem {
  readonly label: string;
  readonly active?: boolean;
  readonly expandable?: boolean;
}

export interface LoyaltyTier {
  readonly name: string;
  readonly threshold: string;
  readonly discount: string;
  readonly accent?: boolean;
}

export interface BonusCard {
  readonly tier: string;
  readonly summary: string;
  readonly total: number;
  readonly footnote: string;
  readonly cta: string;
  readonly featured?: boolean;
}

export interface OrderRow {
  readonly id: string;
  readonly product: string;
  readonly address: string;
  readonly price: string;
  readonly originalPrice?: string;
  readonly action: string;
  readonly hasPreview?: boolean;
}
