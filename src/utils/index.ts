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