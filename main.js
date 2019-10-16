let clients = [
    {
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

for (client of clients){
    console.log(client.name);
    document.getElementById("clients").innerHTML = client.name +' '+ client.surname;
}

