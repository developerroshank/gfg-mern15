const fetchData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await data.json()
    return dataJson
}

// fetchData().then(res => console.log(res)).catch(err => console.log(err));

fetchData().then(result => {
    const users = document.getElementById('user-list')
    result.forEach((object) => {
        const user = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = object.username;
        user.appendChild(p);
        users.appendChild(user);
    });
}).catch(err => console.log(err));