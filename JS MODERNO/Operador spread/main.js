const states = ['Minas Gerais', 'Rio de Janeiro', 'Espirito Santo', 'São Paulo']

const statesClone = [...states]

statesClone.pop()
statesClone.push('Mato Grosso')

console.log(states)
console.log(statesClone)