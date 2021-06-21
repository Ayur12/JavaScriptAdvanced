const API_URL = "http://localhost:3000";

Vue.component('custom-input', {
  props: ['value'],
  template: `        
      <input class = 'custom-input'
      placeholder = 'введите запрос'
      v-bind:value='searchLine'
      v-on:input="$emit('input', $event.target.value)"      
      >      
      `
});

Vue.component("goods-list", {
  props: ["goods"],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `,
});

Vue.component("goods-item", {
  props: ["goodProp"],
  methods: {
    async addToCart() {
      const response = await fetch(`${API_URL}/addToCart`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.goodProp)
      });
    },
  },
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button @click=addToCart>в корзину</button>
    </div>
  `,
});


Vue.component('basket-list', {
  props: ['basketList'],
  template: `
      <div class = "basket-list">
      <basket-item v-for = "goodEntity in basketList" :goodProp = "goodEntity"></basket-item>
      </div>
  `
});

Vue.component('basket-item', {
  props: ['goodProp'],
  methods: {
    async getBasketProducts() {
      const responce = await fetch(`${API_URL}/cart`);
      if (responce.ok) {
        const basketItems = await responce.json();
        this.basketList = basketItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },
  template: `
      <div class = "basket-item">
          <h3>{{goodProp.product_name}}</h3>
          <p>{{goodProp.price}}</p>            
      </div>
  `
});

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    basketList: [],
    searchLine: '',
    isVisibleCart: false,
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },

    filterGoods: function () {
      this.searchLine = document.querySelector('.custom-input').value;
      let userInput = this.searchLine;
      this.goods.forEach((good) => {
        if (good.product_name == userInput) {
          this.filteredGoods = [];
          this.filteredGoods.push(good);
        }
      });
    },
  },

  async mounted() {
    await this.getProducts();
    await this.getBasketProducts();
  },
});
