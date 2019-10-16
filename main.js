let user1 = {
    "name": "Jan",
    "surname": "Kowalski",
    "balance": "1000"
}

function addUser(user1){
    try{
        document.getElementById('users').innerHTML = user1.name + ' ' + user1.surname;
        console.log('work');
    } catch {
        console.log("didnt work");
    }
}

