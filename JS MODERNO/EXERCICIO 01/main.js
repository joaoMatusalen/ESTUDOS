function sum(...numbers) {
  const sum = numbers.reduce((acumulador, currentValue) => acumulador + currentValue) 
  return sum
}


function mediaSimples (...numbers) {
  const calc = numbers.reduce((acumulador, currentValue) => (acumulador + currentValue))
  const resut = calc / numbers.length
  return resut
}

function mediaPonderada (...numbers){
  let mult  = 0
  let peso = 0

  numbers.forEach(({n, p}) => {
   mult += n * p 
   peso += p
  })
  const result = mult / peso
  return result
}


console.log(mediaPonderada({n: 4, p:32}, {n: 2, p:42}))