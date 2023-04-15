// Mi version
export function findNb(m: number): number {
  let res = 0;
  let i = 0;
  while (res < m) {
    res += Math.pow(i + 1, 3);
    i++;
  }
  return res === m ? i : -1;
}

// La puntuada como mas inteligente
// export function findNb(m: number): number {
//   var n = 0;
//   while (m > 0) m -= Math.pow(++n, 3);
//   return m ? -1 : n;
// }
