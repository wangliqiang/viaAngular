export interface NavigationItem {
  id: string;
  title: string;
  i18n?: string;
  type: 'item' | 'group' | 'collapse';
  icon?: string;
  hidden?: boolean;
  url?: Array<string>;
  urlParam?: {[propName: string]: string | number};
  classes?: string;
  badge?: {
      title?: string;
      bg?: string;
      fg?: string;
  };
  children?: Array<NavigationItem>;
}

export interface NotaddNavigation extends NavigationItem {
  children?: Array<NavigationItem>;
}