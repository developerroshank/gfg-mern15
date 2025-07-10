const data = [
    {
        name: 'harsh',
        age: 20
    },
    {
        name: 'shivam',
        age: 24
    },
    {
        name: 'mohan',
        age: 28
    },
    {
        name: 'monika',
        age: 21
    },
    {
        name: 'rohit',
        age: 25
    },
    {
        name: 'akash',
        age: 19
    },
]

const p = data.map(e => e.name[0].toUpperCase() + e.name.slice(1))
console.log(p)