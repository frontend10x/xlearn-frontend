export const secondsToTimeFormat = (segundos) => {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;

  if (horas > 0) {
    return `${addZeros(horas)}:${addZeros(minutos)}:${addZeros(
      segundosRestantes
    )}`;
  } else {
    return `${minutos}:${addZeros(segundosRestantes)}`;
  }
}

// Función auxiliar para agregar ceros a los valores menores que 10
const addZeros = (valor) => {
  return valor < 10 ? `0${valor}` : valor;
}
