let clients = [{
        "name": "Jan",
        "surname": "Kowalski",
        "balance": "1000"
    },
    {
        "name": "Piotr",
        "surname": "Nowak",
        "balance": 5000
    }
];



for (client of clients) {
    let newClient = document.createElement("li");
    let setClient = document.createTextNode(client.name + ' '+ client.surname +'-'+ client.balance);
    newClient.appendChild(setClient);
    document.getElementById("clients").appendChild(newClient);
}