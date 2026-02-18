let user = {
    id: 1,
    name: "John",
};
console.log(user);
user.age = 20;
console.log(user);
user.status = true;
console.log(user);

delete user.id;
console.log(user);