const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class BucketItem {}

class BucketList {}

class GoodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
    return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }

  async fetchGoods() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
      this.filteredGoods = catalogItems
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }

  filterGoods(value) {
    const regExp = new RegExp(value, 'i')
    this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
    this.render()
  }


  render() {
    let listHtml = "";
    this.filteredGoods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}

class BusketItems {

}

const init = async () => {
  const list = new GoodsList();
  const busket = new BusketItems();
  await list.fetchGoods();

  list.render();


  const searchButton = document.querySelector('.search-button')
  const searchInput = document.querySelector('.goods-search')

  searchButton.addEventListener('click', () => {
    list.filterGoods(searchInput.value)
  })
};

window.onload = init;

// const init = () => {
//   setTimeout(() => {
//     console.log('Hi')
//   }, 5000)
// setInterval(() => {
//   console.log("Назойливый popup");
// }, 2000);
// };

// window.onload = init;