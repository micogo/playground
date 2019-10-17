var clients = [{
        "name": "Jan",
        "surname": "Kowalski",
        "balance": "1000"
    },
    {
        "name": "Piotr",
        "surname": "Nowak",
        "balance": 5000
    },
    {
        "name": "Beata",
        "surname": "Rypło",
        "balance": -10000
    }
];



for (client of clients) {
    let newClient = document.createElement("li");
    let setClient = document.createTextNode(client.name + ' ' + client.surname + ': ' + client.balance);
    newClient.appendChild(setClient);
    document.getElementById("clients").appendChild(newClient);
}

clients.push({"name":"Janusz","surname":"KorwinDog","balance":"1000000"});
console.log(clients);

let bydło = clients.slice(2,3);
console.log(bydło);
