// 自定义聚焦指令
const vFocus = {
  mounted(el: HTMLElement, binding: any) {
    const className: string = el.className;
    if (className.startsWith('el-')) {
      while (el.children.length) {
        el = el.children[0] as HTMLElement
      }
    }
    return el.focus()
  }
}
export default vFocus;