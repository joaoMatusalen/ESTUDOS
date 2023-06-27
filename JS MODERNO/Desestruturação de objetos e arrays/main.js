const person = {
    name: 'Joao',
    age: '18',
    email: 'joao@gmail.com',
    friends: ['Fernando', 'Julia'] 
}

const {name, age, friends} = person

console.log(name, age, friends)

const [friend1, friend2] = friends

console.log(friend1, friend2)

function user({name, age, email}) {
    const id = Math.floor(Math.random()* 9999)
    return{
        id,
        name,
        age,
        email
    }
}

console.log(user(person))