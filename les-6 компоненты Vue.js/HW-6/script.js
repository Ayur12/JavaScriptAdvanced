const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";




Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class = "goods-list">
        <goods-item v-for = "goodEntity in goods" :goodProp = "goodEntity"></goods-item>
        </div>
    `
});

Vue.component('goods-item', {
    props: ['goodProp', "addBasket"],
    template: `
        <div class = "goods-item">
            <h3>{{goodProp.product_name}}</h3>
            <p>{{goodProp.price}}</p>
            <button :id='goodProp.id_product' @click='addBasket'>В корзину</button>
        </div>
    `
});

Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input class = 'custom-input'
        v-bind:value='searchLine'
        v-on:input="$emit('input', $event.target.value)"
        v-on:keyup.enter="submit"
      >      
    `
});



const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        basketList: [],
        isVisibleCart: false,
        count: 0,
    },

    methods: {
        async getProducts() {
            const responce = await fetch(`${API_URL}/catalogData.json`);
            if (responce.ok) {
                const catalogItems = await responce.json();
                this.goods = catalogItems;
                this.filteredGoods = catalogItems;
            } else {
                alert("Ошибка при соединении с сервером");
            }
        },

        filterGoods() {
            this.searchLine = document.querySelector('.custom-input').value;
            let userInput = this.searchLine;
            this.goods.forEach((good) => {
                if (good.product_name == userInput) {
                    this.filteredGoods = [];
                    this.filteredGoods.push(good);
                }
            });
        },

        addBasket() {

            console.log('testClick')



        }
    },

    async mounted() {
        await this.getProducts()
    }
});



