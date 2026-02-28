
let users = []


function userFactory(id, name, age, status) {
    let user = {
        id: id,
        name: name,
        age: age,
        status: status
    }
    return user;
}

let u1 = userFactory(1, 'Alex', 23, true);
let u2 = userFactory(2, 'Nick', 24, false);
let u3 = userFactory(3, 'Mike', 22, true);
let u4 = userFactory(4, 'Skye', 21, false);
let u5 = userFactory(5, 'Tom', 22, true);
document.write(`<h3>${u1.id} ${u1.name} ${u1.age} ${u1.status}</h3>`);
document.write(`<h3>${u2.id} ${u2.name} ${u2.age} ${u2.status}</h3>`);
document.write(`<h3>${u3.id} ${u3.name} ${u3.age} ${u3.status}</h3>`);
document.write(`<h3>${u4.id} ${u4.name} ${u4.age} ${u4.status}</h3>`);
document.write(`<h3>${u5.id} ${u5.name} ${u5.age} ${u5.status}</h3>`);

users.push(u1);
users.push(u2);
users.push(u3);
users.push(u4);
users.push(u5);

console.log(users);
