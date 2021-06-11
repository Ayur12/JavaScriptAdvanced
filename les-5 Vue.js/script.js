const app = new Vue(
    {
        el: '#app',
        data: {
            name: '',
            //listOfName: ['Ovik', 'Ayur', 'Lera','Natasha', 'Nadya']
            listOfName: [{ name: 'Monitor', price: 500 }, { name: 'Photo', price: 100 }]
        },
        methods: {
            //onclickSayHello: ()=>{console.log('Hello!!!')}
            onClickSayHello: (e) => {
                console.log(`Hello ${e.target.innerText}`)
            }
        },
        computed: {
            transformToUpperCase(){
                return this.name.toUpperCase()
            }
        }
    }
)