class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { img: 'img/shirt.jpg', title: 'Shirt1', price: 150, id: 'Shirt1' },
            { img: 'img/socks.jpg', title: 'Socks1', price: 50, id: 'Socks1' },
            { img: 'img/jacket.jpg', title: 'Jacket1', price: 350, id: 'Jacket1' },
            { img: 'img/shoes.webp', title: 'Shoes1', price: 250, id: 'Shoes1' },
            { img: 'img/shirt.jpg', title: 'Shirt2', price: 151, id: 'Shirt2' },
            { img: 'img/socks.jpg', title: 'Socks2', price: 51, id: 'Socks2' },
            { img: 'img/jacket.jpg', title: 'Jacket2', price: 350, id: 'Jacket2' },
            { img: 'img/shoes.webp', title: 'Shoes2', price: 250, id: 'Shoes2' },
            { img: 'img/shirt.jpg', title: 'Shirt3', price: 152, id: 'Shirt3' },
            { img: 'img/socks.jpg', title: 'Socks3', price: 52, id: 'Socks3' },
            { img: 'img/jacket.jpg', title: 'Jacket3', price: 350, id: 'Jacket3' },
            { img: 'img/shoes.webp', title: 'Shoes3', price: 250, id: 'Shoes3' },
        ];
    }
    totalPrice() {

    }
    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").innerHTML = listHtml;
    }
}
//создаем класс корзины
class Basket {
    constructor() {
        this.goods = []
    }

    //добавление товара в корзину
    addItem() {
        this.goods.push()
    }
    //удаление товара из корзины
    removeItem() {

    }
    //Итоговая сумма товаров в корзине
    totalPrice() {

    }
    render() {

    }

}

const init = () => {
    const list = new GoodsList();
    list.fetchGoods();
    list.render();
};

window.onload = init;