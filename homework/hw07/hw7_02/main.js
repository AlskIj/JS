//#nkMXISv

function Client(id,name,surname,email,phone,order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1, 'Ivan', 'Petrenko', 'ivan.petrenko@gmail.com', '+380671234567', [
        {title: 'milk', price: 30},
        {title: 'bread', price: 25}
    ]),
    new Client(2, 'Oleh', 'Shevchenko', 'oleh.shev@gmail.com', '+380501112233', [
        {title: 'beer', price: 50},
        {title: 'chips', price: 35},
        {title: 'cola', price: 40}
    ]),
    new Client(3, 'Anna', 'Koval', 'anna.koval@gmail.com', '+380931234123', [
        {title: 'apple', price: 20}
    ]),
    new Client(4, 'Maria', 'Bondar', 'maria.bondar@gmail.com', '+380661234999', [
        {title: 'bread', price: 25},
        {title: 'butter', price: 60},
        {title: 'cheese', price: 120},
        {title: 'milk', price: 30}
    ]),
    new Client(5, 'Dmytro', 'Tkachenko', 'dmytro.tkach@gmail.com', '+380991112244', [
        {title: 'pizza', price: 150},
        {title: 'cola', price: 40}
    ]),
    new Client(6, 'Olha', 'Melnyk', 'olha.melnyk@gmail.com', '+380631111222', [
        {title: 'tea', price: 45},
        {title: 'cookies', price: 55},
        {title: 'chocolate', price: 70}
    ]),
    new Client(7, 'Andrii', 'Kravets', 'andrii.kravets@gmail.com', '+380971231231', [
        {title: 'water', price: 20}
    ]),
    new Client(8, 'Natalia', 'Lysenko', 'natalia.lysenko@gmail.com', '+380681234000', [
        {title: 'juice', price: 50},
        {title: 'banana', price: 30},
        {title: 'apple', price: 20},
        {title: 'yogurt', price: 45}
    ]),
    new Client(9, 'Serhii', 'Mazur', 'serhii.mazur@gmail.com', '+380951234321', [
        {title: 'meat', price: 200},
        {title: 'bread', price: 25}
    ]),
    new Client(10, 'Viktor', 'Hrytsenko', 'viktor.hryts@gmail.com', '+380731234111', [
        {title: 'fish', price: 180},
        {title: 'rice', price: 60},
        {title: 'sauce', price: 40}
    ])
];

//#8abtVjRv
console.log(clients.sort((a, b) => a.order.length - b.order.length));

