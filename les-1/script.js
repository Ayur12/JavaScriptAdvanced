const goods = [
    { img: 'img/shirt.jpg', title: 'Shirt', price: 150 },
    { img: 'img/socks.jpg', title: 'Socks', price: 50 },
    { img: 'img/jacket.jpg', title: 'Jacket', price: 350 },
    { img: 'img/shoes.webp', title: 'Shoes', price: 250 },
    { img: 'img/shirt.jpg', title: 'Shirt', price: 150 },
    { img: 'img/socks.jpg', title: 'Socks', price: 50 },
    { img: 'img/jacket.jpg', title: 'Jacket', price: 350 },
    { img: 'img/shoes.webp', title: 'Shoes', price: 250 },
    { img: 'img/shirt.jpg', title: 'Shirt', price: 150 },
    { img: 'img/socks.jpg', title: 'Socks', price: 50 },
    { img: 'img/jacket.jpg', title: 'Jacket', price: 350 },
    { img: 'img/shoes.webp', title: 'Shoes', price: 250 },
]

const renderGoodsItem = (img, title, price) => {
    return `<div class="goods-item"><div class="photo-product"><img src="${img}" alt="photo" width=100%></div><h3>${title}</h3><p class = "price">Price: ${price}</p><button class="add-basket">Добавить</button></div>`
}

const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.price)).join('')

    //   const goodsListDiv = document.querySelector('.goods-list')
    //   goodsListDiv.innerHTML = goodsList

    document.querySelector('.goods-list').innerHTML = goodsList

}

const init = () => {
    renderGoodsList(goods)
}

window.onload = init
