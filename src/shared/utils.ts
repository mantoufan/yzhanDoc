export function randomId(n = 8): string {
  // 生成 n 位长度的字符串
  const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str.charAt(Math.floor(Math.random() * str.length))
  }
  return result
}
