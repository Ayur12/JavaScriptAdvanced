const API_URL =
    "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";




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


    async mounted() {
        await this.getProducts()
    }
});
