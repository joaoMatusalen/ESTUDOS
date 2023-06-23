const person = {
    name: 'João', 
    age: '18',
    job: 'developer',
    brothers: ['julia', 'fernando']
}

const { job, age, brothers } = person

const [sister, brother] = brothers

console.log(sister, brother)

function createUser({name, age, job}) {
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        age,
        job
    }
}

const user = createUser(person)
console.log(user)