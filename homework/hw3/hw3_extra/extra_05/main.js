const books = [
    {
        title: "Harry Potter and the Philosopher's Stone",
        pages: 320,
        authors: ["J.K. Rowling"],
        genres: ["Fantasy", "Adventure"]
    },
    {
        title: "Good Omens",
        pages: 412,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Fantasy", "Comedy", "Apocalyptic"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["Dystopia"]
    },
    {
        title: "The Great Gatsby",
        pages: 180,
        authors: ["F. Scott Fitzgerald"],
        genres: ["Novel", "Tragedy"]
    },
    {
        title: "Pride and Prejudice",
        pages: 432,
        authors: ["Jane Austen"],
        genres: ["Romance"]
    },
    {
        title: "To Kill a Mockingbird",
        pages: 281,
        authors: ["Harper Lee"],
        genres: ["Novel", "Legal Story"]
    },
    {
        title: "Moby Dick",
        pages: 635,
        authors: ["Herman Melville"],
        genres: ["Adventure", "Epic", "Sea Story"]
    }
];

// знайти найбільшу книжку
// let largestBook = books[0];
// for (let i = 0; i < books.length; i++) {
//     if (books[i].pages > largestBook.pages) {
//         largestBook = books[i];
//     }
// }
// console.log(largestBook);

// знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenres = books[0].genres.length;
// let result = [books[0]];
//
// for (let i = 1; i < books.length; i++) {
//     let current = books[i].genres.length;
//
//     if (current > maxGenres) {
//         maxGenres = current;
//         result = [books[i]];
//     }
//     else if (current === maxGenres) {
//         result.push(books[i]);
//     }
// }
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// знайти книжку/ки з найдовшою назвою
// let longTitle = books[0].title.length;
// let result = [books[0]];
//
// for (let i = 1; i < books.length; i++) {
//     const current = books[i].title.length;
//
//     if (current > longTitle) {
//         longTitle = current;
//         result = [books[i]];
//     }
//     else if (current === longTitle) {
//         result.push(books[i]);
//     }
// }
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i]);
// }

// знайти книжку/ки, які писали 2 автори
// for (let i = 0; i < books.length; i++) {
//     if (books[i].authors.length === 2) {
//         console.log(books[i]);
//     }
// }

// знайти книжку/ки, які писав 1 автор
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        console.log(books[i]);
    }
}