class GoodsItem {
    constructor(img, title, price, id) {
        this.img = img;
        this.title = title;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="goods-item"><img class = "photo-product"src="${this.img}" alt="Photo"><h3>${this.title}</h3><p>${this.price}</p><button id = ${this.id}>В корзину</button></div>`;
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
        let total = this.price;
        let totalPrice = document.querySelector('.totalPrice');
        totalPrice.textContent += total;
        // let total = 0;
        // let totalPrice = document.querySelector('.totalPrice');
        // totalPrice.textContent = '';
        // this.goods.forEach((good) => {
        //     const goodPrice = new GoodsItem(good.price);
        //     total += goodPrice;
        // })
        // totalPrice.textContent = 'Итоговая сумма: ' + total + '$';

    }


    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.img, good.title, good.price, good.id);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").innerHTML = listHtml;
    }
}
//создаем класс корзины
class BusketItem {
    constructor(title, price, id) {        
        this.title = title;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="basket-item"><h3>${this.title}</h3><p>${this.price}</p><button id = ${this.id}>Удалить из корзины</button></div>`;
    }
}

class BusketList {
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
    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.title, good.price, good.id);
            listHtml += goodItem.render();
        });
        document.querySelector(".basket").innerHTML = listHtml;
    }
 }

const init = () => {
    const list = new GoodsList();
    list.totalPrice();
    list.fetchGoods();
    list.render();
    const basketList = new BusketList();
    basketList.fetchGoods();
    basketList.render();

};

window.onload = init;