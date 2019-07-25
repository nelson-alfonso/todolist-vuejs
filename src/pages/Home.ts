import Vue from 'vue';
import TabelaTarefas from '../components/TabelaTarefas';
import FormularioTarefa from '../components/FormularioTarefa';

export default Vue.component('home', {
    template:
    /*html */`
        <v-container>

            <v-layout row wrap justify-space-between class="my-3">
                <h1>{{ title }}</h1>
                <v-btn 
                    dark
                    fab
                    largenpm
                    color="primary"
                    @click="exibirFormulario = !exibirFormulario" 
                    >
                    <v-icon>
                        {{ exibirFormulario ? 'mdi-arrow-left' : 'mdi-plus' }}
                    </v-icon>
                </v-btn>
            </v-layout>
            <hr>
            <formulario-tarefa @voltar="exibirFormulario = false" v-if="exibirFormulario"></formulario-tarefa>
            <tabela-tarefas @editar="exibirFormulario = true" v-else></tabela-tarefas>
        </v-container>
    `,
    components: {
        TabelaTarefas,
        FormularioTarefa
    },
    data() {
        return  {
            title: "TodoList Vuejs",
            exibirFormulario : false
        }
    },
    computed: {
        tituloBotao: function() {
            return this.exibirFormulario ? 'Voltar' : 'Nova Tarefa';
        }
    }

});