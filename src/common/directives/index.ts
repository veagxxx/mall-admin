import { App } from "vue";
import focus from "./input/focus";
// 自定义指令
export default (app: App) => {
  focus(app);
};