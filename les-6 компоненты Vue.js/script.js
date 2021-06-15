Vue.component('some_component', {
    template: '<h1>{{name}} {{surname}} {{age}}</h1>',
    data(){
        return { name: 'Ayur', surname: 'Zoltoev', age: 33};
    },
});


Vue.component('component', {
    template: '<h1><slot></slot>{{name}} {{surname}} {{age}}</h1>',
    props: ['name', 'surname', 'age'],
});

Vue.component('users', {
    template: '<h1>{{name}}</h1>',
    props: ['name'],
});

const app = new Vue({
    el: '#app',
    data: {
        name: 'Sauron'
        
    }
})

