let foobar = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}</div>`)
    }
}
foobar([])