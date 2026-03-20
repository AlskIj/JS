let products = [

    {
        title: 'milk',
        price: 22,
        image: 'https://bf1af2.akinoncloudcdn.com/products/2024/09/20/70538/378a22c5-3f77-4163-ab7f-f045b7a6ddaf_size1080_cropCenter.jpg'
    },

    {

        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },

    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },

    {
        title: 'tea',
        price: 15,
        image: 'https://www.tearaja.in/cdn/shop/products/organic-green-tea-tearaja-1.jpg?crop=center&height=800&v=1704912609&width=800'
    },

];

for (const product of products) {
    document.write(`
             <div class="product-card">
                  <h3>${product.title}. Price - ${product.price}</h3>
                  <img src="${product.image}" alt="" class="product-image">
              </div>
    `);
}
