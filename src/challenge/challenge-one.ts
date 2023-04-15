/* Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.
A la máquina se le pasa un array con los regalos. Cada regalo es un string. 
Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.
El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. 
Por ejemplo:

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

export function wrapping(gifts: string[]) {
  const wraped = gifts.map((gift) => {
    const envoltorio = gift.length + 2;
    const tapa = "*".repeat(envoltorio) + "\n";
    const piso = "\n" + "*".repeat(envoltorio);
    return tapa + `*${gift}*` + piso;
  });

  return wraped;
}
