const fetchData = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await data.json();
    return dataJson;
}

fetchData().then(result => {
    const cards = document.getElementById('cards');

    result.forEach((object) => {

        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h1')
        title.innerText = 'API Cards'

        const parentCircle = document.createElement('div');
        parentCircle.className='parent__circle';

        const circle = document.createElement('div');
        circle.className='circle';

        const name = document.createElement('h2');
        name.innerText = object.name.split(' ').map(e => e[0]).join('');

        const addr = document.createElement('p');
        // addr.textContent = "Address: " + object.address.street + ', ' + object.address.suite + ', ' + object.address.city + ', Zip: ' + object.address.zipcode  
        // addr.textContent = "City: " + object.address.city;
        addr.innerHTML = `<strong>City: </strong> <span>${object.address.city}</span>`;


        const email = document.createElement('p');
        email.innerHTML = `<strong>Email: </strong> <span><a href="mailto:${object.email}">${object.email}</a></span>`

        const company = document.createElement('p');
        // company.textContent = "Company: " + object.company.name;
        company.innerHTML = `<strong>Company: </strong> <span>${object.company.name}</span>`;

        // const website = document.createElement('p');
        // website.textContent = "Website: " + object.website;

        circle.appendChild(name);
        parentCircle.appendChild(circle);
        card.appendChild(parentCircle);
        card.appendChild(addr);
        card.appendChild(email);
        card.appendChild(company);
        // card.appendChild(website);
        cards.appendChild(card);

        console.log(object);
        
    });
    
}).catch(err => console.log(err));