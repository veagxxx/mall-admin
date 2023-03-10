import { Route } from '@/typings/route';
export const routerList: Route[] = [
  {
    id: 1,
    name: 'Index',
    path: '/index',
    component: 'pages/home/index.vue',
    role: '',
    meta: {
      title: '首页',
      icon: 'HomeFilled',
      hasAuthority: false,
    }
  },
  {
    id: 2,
    name: 'Commodity',
    path: '/commodity',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '商品管理',
      icon: 'ShoppingCart',
      hasAuthority: true,
    },
  },
  {
    id: 3,
    name: 'Order',
    path: '/order',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '订单管理',
      icon: 'Memo',
      hasAuthority: true,
    },
  },
  {
    id: 4,
    name: 'Member',
    path: '/member',
    component: 'pages/home/index.vue',
    role: 'admin',
    meta: {
      title: '会员管理',
      icon: 'Avatar',
      hasAuthority: true,
    },
  },
]

// const tableData: any = new Array(1000).fill({ name: '佛耶格', title: '破败之王', skill: '痛贯天灵', position: '打野' })
// const columns: Column[] = [
//   {
//     type: 'index',
//     label: '序号',
//     width: 60
//   },
//   {
//     prop: 'name',
//     align: 'center',
//     label: '名字',
//   },
//   {
//     prop: 'title',
//     align: 'center',
//     label: '称号',
//   },
//   {
//     prop: 'skill',
//     align: 'center',
//     label: '大招',
//     formatter: (row: Column, column: number, value: string, index: number) => {
//       return value
//     }
//   },
//   {
//     prop: 'position',
//     align: 'center',
//     label: '位置',
//     render: {
//       type: 'info',
//     }
//   },
//   {
//     align: 'center',
//     label: '操作',
//     fixed: 'right',
//     list: [
//       {
//         text: '编辑',
//         type: 'primary',
//         size: 'small',
//         cb: (row: Column) => editRow(row)
//       },
//       {
//         text: '删除',
//         type: 'danger',
//         size: 'small',
//         cb: (row: Column) => deleteRow(row)
//       },
//     ]
//   },
// ]
// const editRow = (row: Column) => {
//   console.log('editRow', row)
// }
// const deleteRow = (row: Column) => {
//   console.log('deleteRow', row)
// }