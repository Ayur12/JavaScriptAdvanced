const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

Vue.component('custom-input', {
    props: ['value'],
    template: `        
        <input class = 'custom-input'
        placeholder = 'введите запрос'
        v-bind:value='searchLine'
        v-on:input="$emit('input', $event.target.value)"
        v-on:keyup.enter="submit"
        >      
        `
});


Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class = "goods-list">
            <goods-item v-for = "goodEntity in goods" :goodProp = "goodEntity"></goods-item>
        </div>
    `
});

Vue.component('goods-item', {
    data: {
        addBasket(clicked_id) {
            let btn_id = clicked_id;
            this.goods.forEach((good) => {
                if (good.id_product === btn_id) {
                    this.basketList.push(good);
                }
            });
            document.getElementById(clicked_id).textContent = 'Добавлено';
            document.getElementById(clicked_id).disabled = true;

        },
    },
    props: ['goodProp'],
    template: `
        <div class = "goods-item">
            <h3>{{goodProp.product_name}}</h3>
            <p>{{goodProp.price}}</p>
            <button class = "btnAdd" :id='goodProp.id_product' @click=addBasket(goodProp.id_product)'>В корзину</button>
        </div>
    `
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
    methods: {
        addBasket: function (clicked_id) {
            let btn_id = clicked_id;
            this.goods.forEach((good) => {
                if (good.id_product === btn_id) {
                    this.basketList.push(good);
                }
            });
            document.getElementById(clicked_id).textContent = 'Добавлено';
            document.getElementById(clicked_id).disabled = true;

        },
    },
    props: ['goodProp'],
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
                //this.basketList = catalogItems;
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
        await this.getProducts()
    }
});



