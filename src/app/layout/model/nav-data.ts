import { NavigationItem } from './NavigationItem';

export const navigation: Array<NavigationItem> = [
  {
    id: 'dashboard',
    title: '仪表盘',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'analytics',
        title: '分析页',
        type: 'item',
        icon: 'palette',
        url: [
        ],
        badge: {
          title: '25',
          bg: '#1189fb',
          fg: '#FFFFFF'
        }
      }
    ]
  }, {
    id: 'pages',
    title: '页面',
    type: 'collapse',
    icon: 'pages',
    children: [
      {
        id: 'profile',
        title: '个人主页',
        type: 'item',
        icon: 'extension',
        url: [
        ]
      }
    ]
  }
];
