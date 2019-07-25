import Vue from 'vue';
import TarefaService from '../service/TarefaService';
import FormaterUtil from '../util/FormaterUtil';

export default Vue.component("tabela-tarefas", {

        template: 
        /* html */ `
        <v-simple-table>
             <thead>
                <th>Título da Tarefa</th>
                <th>Descrição</th>
                <th>Prazo Final</th>
                <th> Check</th>
                <th> Radio</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr v-for="(tarefa, i) in tasks">
                    <td>{{tarefa.titulo}}</td>
                    <td>{{tarefa.descricao}}</td>
                    <td>{{FormaterUtil.formatarData(tarefa.prazo)}}</td>
                    <td>
                            <input type="checkbox" true-value="true" false-value="false" v-model="tarefa.finalizado" @change="marcarTarefa">Finalizado  
                    </td>
                    <td>
                            (Sim<input type="radio" value="true"  v-model="tarefa.finalizado" @change="marcarTarefa">
                            <input type="radio" value="false"  v-model="tarefa.finalizado" @change="marcarTarefa">Não)
                    </td>
                    <td>
                    <v-tooltip top>
                      <template v-slot:activator="{on}">
                         <v-btn text icon @click="visualizar(i)" color="blue" v-on="on">
                           <v-icon>mdi-eye</v-icon>
                         </v-btn>
                      </template>
                      <span>Visualizar</span>
                    </v-tooltip>
                    
                    <v-tooltip top>
                      <template v-slot:activator="{on}">
                         <v-btn text icon @click="editar(i)" color="green" v-on="on">
                           <v-icon>mdi-pencil</v-icon>
                         </v-btn>
                      </template>
                      <span>Editar Tarefa</span>
                    </v-tooltip>


                    <v-tooltip top> 
                      <template v-slot:activator="{on}">
                        <v-btn text icon @click="remover(i)" color="red" v-on="on">
                           <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </template> 
                      <span>Remover Tarefa</span> 
                    </v-tooltip>
                    </td>
                </tr>
            </tbody>
         </v-simple-table>       
        `,
        data() {
            return {
                FormaterUtil : FormaterUtil
            }
        },
        methods: {
                marcarTarefa() {
                    TarefaService.atualizarLista(this.tasks);
                },
                visualizar(i: number) {
                    this.$router.push({name: 'detalhe' , params: {tarefaSelecionada: this.tasks[i]}})
                },
                editar(i: number) {
                    this.$store.dispatch('modtarefas/editar',i);
                    this.$emit('editar');
                },
                remover(i: number) {
                    if (confirm("Tem certeza que deseja remover esta tarefa?")) {
                        this.$store.dispatch('modtarefas/remover',i);
                        this.$emit('remover');
    
                    }
                }
            },
        mounted() {
                this.$store.dispatch('modtarefas/carregarTarefas')
        },
        computed: {
            tasks: function() {
                return this.$store.state.modtarefas.tarefas;
            }
        }
    }
);