// 深拷贝
export const deeoClone = (obj: any) => {
  if (!obj && typeof obj !== 'object') {
    return;
  }
  const cloneObj: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      cloneObj[key] = deeoClone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}

/**
 * 按键分组
 * @param arr 对象数组
 * @param key 对象的某个key
 * @returns obj[key]: [obj, obj2, ....]
 */
export const groupByKey = (arr: Array<any>, key: string) => {
  if (!Array.isArray(arr)) return arr;
  return arr.reduce((acc: any, cur: any) => {
    return { ...acc, [cur[key]]: [...(acc[cur[key]] || []), cur] }
  }, {})
}


export function findLastIndex (
  arr: Array<any>, 
  callback: (value?: any, index?: number, array?: Array<any>) => boolean,
  thisArg?: any,
) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return i
    }
  }
  return -1
}