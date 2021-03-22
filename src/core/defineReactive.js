import observe from "./observe";
// 定义响应式  通过闭包使用Object.defineProperty 的set get方法
export default function defineReactive(data, key, val) {
  if (arguments.length == 2) {
    val = data[key];
  }
  // observe 会判断 val 是不是 object ,是object 设置属性为响应式
  observe(val);
  Object.defineProperty(data, key, {
    get() {
      console.log("访问了: ", key, val);
      return val;
    },
    set(value) {
      console.log("设置了: ", key, value);
      if (value == val) return;
      // 新值设置响应式
      observe(value);
      val = value;
    }
  });
}