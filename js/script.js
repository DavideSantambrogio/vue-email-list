const { createApp } = Vue;

const app = createApp({
    data(){
        // dati
        return{
            randomEmail: [],
            isLoading: false,
        }
    },

    created(){
        // all'avvio della pagina

    },
    
    methods: {
        // funzioni
        generateEmail() {
            this.randomEmail= []
            this.isLoading =true;
            for (let i = 0; i < 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    this.randomEmail.push(resp.data.response);  
                    if (this.randomEmail.length === 10) {
                        this.isLoading=false;                        
                    }                
                })                    
            }
        },
    },
}).mount("#app");
