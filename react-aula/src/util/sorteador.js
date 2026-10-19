// Sorteia num número no intervalo [min, max]:

export default function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}