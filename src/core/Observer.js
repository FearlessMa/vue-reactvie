import { def } from "./util";
import defineReactive from "./defineReactive";

// 数据变为响应式，挂在__ob__ = 当前实例
export default class Observer {
  constructor(value) {
    console.log("Observer: 构造函数被调用");
    // 挂载 __ob__  并且不可枚举
    def(value, "__ob__", this, false);
    // obj的每一个数变成响应式
    this.walk(value);
  }
  walk(value) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }
}
