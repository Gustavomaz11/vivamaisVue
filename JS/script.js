const vm = new Vue({
    el: '#app',
    data: {
        
    },
    methods: {
        trocaPagina(pagina) {
            window.location.href = pagina
        }
    }
})