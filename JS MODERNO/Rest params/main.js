function sum(...numbers) {
  const sum = numbers.reduce((acumulador, currentValue) => acumulador + currentValue) 
  return sum
}


console.log(sum(22, 2))