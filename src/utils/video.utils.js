export const secondsToTimeFormat = (segundos) => {
  const hours = Math.floor(segundos / 3600);
  const minutes = Math.floor((segundos % 3600) / 60);
  const secondsRemaining = segundos % 60;

  if (hours > 0) {
    return `${addZeros(hours)}:${addZeros(minutes)}:${addZeros(
      secondsRemaining
    )}`;
  } else {
    return `${minutes}:${addZeros(secondsRemaining)}`;
  }
}

// Función auxiliar para agregar ceros a los valores menores que 10
const addZeros = (valor) => {
  return valor < 10 ? `0${valor}` : valor;
}
