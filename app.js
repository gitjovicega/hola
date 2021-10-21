var app = new Vue({
    el:'#app',
    data : {
        titulo : 'Intro VueJs Grupo ',
        grupo: 74,
        tituloh1 : 'claseh1',
        minTitle : 'titulo principal',
        cantidad : 10,
        visible : true,
        actividades: [
            { text: 'Aprender JavaScript',
        estado: true },
            { text: 'Aprender Vue',
            estado: true },
            { text: 'Construir algo increible',
            estado: true },
        ],
        textoBuscar : '',
        peliculas : []
    },
    methods : {
        buscarApi(){
            //logica
            try {
                let urlBuscar = `http://www.omdbapi.com/?apikey=23daade9&t=${this.textoBuscar}&type=movie&plot=full`
                const responseText = await.fetch(urlBuscar, {method: 'GET'});
                //console.log(responseText);
                const responseJson = await.responseText.json();
                // console.log(responseJson);

                this.peliculas.push(responseJson);
                this.textoBuscar = '';
            } catch (error) {
                console.log(error);
            }
        }
    },
    imprimir(){
        var textoBuscar = "hola";
        console.log(this.textoBuscar);
    },
    computed : {
    
    },
    created(){

    }
});