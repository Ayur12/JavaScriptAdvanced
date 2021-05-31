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
            { title: "Shirt", price: 150 },
            { title: "Socks", price: 50 },
            { title: "Jacket", price: 350 },
            { title: "Shoes", price: 250 },
        ];
    }
    totalPrice(){       
        
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
    addItem(){
        this.goods.push()
    }
    //удаление товара из корзины
    removeItem(){

    }
    //Итоговая сумма товаров в корзине
    totalPrice(){

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