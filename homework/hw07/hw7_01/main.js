//#XjJuucOMR0

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


let users = [
    new User(9,'pfc','pfc','qwe@gmail.com','75289724'),
    new User(2,'qwe','qwe','qwe@gmail.com','75289724'),
    new User(3,'kje','kje','qwe@gmail.com','75289724'),
    new User(10,'ham','ham','qwe@gmail.com','75289724'),
    new User(6,'uio','uio','qwe@gmail.com','75289724'),
    new User(5,'fds','fds','qwe@gmail.com','75289724'),
    new User(7,'vbn','vbn','qwe@gmail.com','75289724'),
    new User(1, 'asd', 'asd', 'asd@gmail.com','75289724'),
    new User(8,'cfe','cfe','qwe@gmail.com','75289724'),

    new User(4,'kmx','kmx','qwe@gmail.com','75289724'),
]

//#2ikXsE2WiKZ
//console.log(users.filter(user => user.id % 2 === 0));

//#pOeHKct
console.log(users.sort((a, b) => a.id - b.id));
