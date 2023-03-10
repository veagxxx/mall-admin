import { Column, ElTag } from "element-plus";
import { h } from "vue";

export const columns: Column<any>[] = [
  {
    key: '',
    dataKey: '',
    title: '序号',
    width: 70,
    align: 'center',
    cellRenderer: (value) => {
      return h('span', value.rowIndex + 1)
    }
  },
  {
    key: 'date',
    dataKey: 'date',
    title: '日期',
    width: 300,
    align: 'center',
    cellRenderer: (value) => {
      return h('span', value.cellData)
    }
  },
  {
    key: 'name',
    dataKey: 'name',
    title: '姓名',
    width: 300,
    align: 'center',
  },
  {
    key: 'title',
    dataKey: 'title',
    title: '称号',
    width: 300,
    align: 'center',
  },
  {
    key: 'skill',
    dataKey: 'skill',
    title: '大招',
    width: 300,
    align: 'center',
    cellRenderer: (value) => {
      return h(ElTag, { type: 'success' }, () => h('span', value.cellData))
    }
  },
]

export const tableData = new Array(20).fill({
  date: '2023-03-10', name: '佛耶格', title: '破败之王', skill: '痛贯天灵'
})