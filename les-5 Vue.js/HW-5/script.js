const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

const app = new Vue({
    el: "#app",
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        basketList: [],
        isVisibleCart: false,
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
            this.searchLine = document.querySelector('.goods-search').value;
            let userInput = this.searchLine;
            this.goods.forEach((good) => {
                if (good.product_name == userInput) {
                    this.filteredGoods = [];
                    this.filteredGoods.push(good);
                } 
            });

        },
        addBasket() {      
            this.basketList = this.goods;      
            console.log(this.id);
        }


    },


    async mounted() {
        await this.getProducts()
    }
});
