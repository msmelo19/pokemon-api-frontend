export function setRealFormat(num: number): string {
  return `R$${num.toFixed(2).toString().replace('.', ',')}`;
}
