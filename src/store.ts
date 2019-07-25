import Vue from 'vue';
import Vuex from 'vuex';
import modtarefas from './stores/tarefas';
import modalertas from './stores/alertas';

Vue.use(Vuex); //$store

export default new  Vuex.Store({
  modules: {
        modtarefas, 
        modalertas
  }
})
