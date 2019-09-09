function eachRecursive(
  // 目标对象
  target,
  // 回调函数
  callback = () => {},
  // 条件语句
  condition = target => !!target.length,
  // 下标
  index = 0
) {
  // 未检测到目标对象
  if (!target) {
    return new Error("target is not found .");
  }

  // 目标对象函数类型处理
  if (target.constructor === Function) {
    target = target();
  }

  // 数组类型处理
  if (target.constructor === Array) {
    // 克隆
    let Clone = [...target];

    // 满足递归条件
    if (condition(Clone)) {
      // 执行回调
      callback(Clone.shift(), index);
      // 下标
      index++;
      // 执行回调
      eachRecursive(Clone, callback, condition, index);
    }
  }

  // 对象类型处理
  if (target.constructor === Object) {
    // 使用循环
    Object.keys(target).map(item => callback(item, target[item]));
  }
}

export default eachRecursive;
