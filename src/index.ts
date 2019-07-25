import Vue from 'vue';
import store from './store';
import router from './router';
import vuetify from './puglins/vuetify';
import './puglins/vee-validate';

new Vue({
    el: "#app",
    router,
    store,
    vuetify,
    computed: {
                snackbar() {
                      return this.$store.state.modalertas.snackbar;  
                }

            }
})
