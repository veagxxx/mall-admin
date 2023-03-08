export interface Menu {
  id?: string;
  title: string;
  icon: string;
  path?: string;
  children?: Menu[];
}
export const menusList: Menu[] = [
  { id: '1', title: '首页', icon: 'HomeFilled', path: '/index' },
  {
    id: '2',
    title: '其他菜单',
    icon: 'Menu',
    path: '2',
    children: [
      { id: '2-1', title: '菜单1', icon: 'Watermelon', path: '/index1' },
      { id: '2-2', title: '菜单2', icon: 'Pear', path: '/index2' },
      { id: '2-3', title: '菜单3', icon: 'Grape', path: '/index3' },
      { 
        id: '2-4',
        title: '菜单4', 
        icon: 'MilkTea', 
        path: '2-4',
        children: [
          { id: '2-4-1', title: '菜单4-1', icon: 'IceTea', path: '/index4' }
        ]
      },
    ]
  },
  { id: '3', title: '商品管理', icon: 'ShoppingCart', path: '/index5' },
  { id: '4', title: '订单管理', icon: 'Memo', path: '/index6' },
  { id: '5', title: '会员管理', icon: 'Avatar', path: '/index7' },
]