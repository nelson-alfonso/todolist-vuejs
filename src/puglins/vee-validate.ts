import Vue from 'vue';
import VeeValidade from 'vee-validate';

Vue.use(VeeValidade, {
    locale: 'ptBr', 
    dictionary: {
       ptBr: {
            messages: {
                required: (campo) => 'O ' + campo + ' é obrigatório'
            }
        }
    }
});
