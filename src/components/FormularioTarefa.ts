import Vue from 'vue';
import TarefaService from '../service/TarefaService';

export default Vue.component("form-tarefa", {

    template: 
    /* html */ `
    <form>
    <v-container grid-list-md>
                <h2>{{ indiceEdicao == null ? 'Nova Tarefa' : 'Editar Tarefa' }}</h2>
                <v-layout row wrap>
                    <v-flex xs12 sm4 >
                        <v-text-field   
                            filled
                            :loading="carregando"
                            name="titulo"
                            v-validate="'required'"
                            type="text"
                            label="Titulo" 
                            hint="Ex.: Elaborar plano de metas" 
                            v-model="task.titulo"
                            :error-messages="errors.collect('titulo')"
                            >
                        </v-text-field>

                    </v-flex>

                    <v-flex xs12 sm4>
                        <v-text-field 
                        filled
                        :loading="carregando"
                        name="descricao"
                        v-validate="'required'"
                        type="text"
                        label="Descrição" 
                        hint="Ex.: Plano de meta do exercicio separado por mes" 
                        v-model="task.descricao"
                        :error-messages="errors.collect('descricao')"
                        >
                        </v-text-field>
                    
                    </v-flex>

                    <v-flex xs12 sm4>
                        <v-menu
                            v-model="datepicker"
                            :loading="carregando"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"                            
                            >
                            <template v-slot:activator="{ on }">
                                <v-text-field 
                                filled
                                name="prazo"
                                v-validate="'required'"
                                type="date"
                                label="Prazo de conclusão" 
                                hint="Ex.: 02/07/2019" 
                                v-model="task.prazo"
                                :error-messages="errors.collect('prazo')"
                                v-on="on"
                                readonly
                                >
                                </v-text-field>
                            </template>        
                            <v-date-picker 
                                v-model="task.prazo" 
                                @input="datepicker = false">
                            </v-date-picker>                                               
                         </v-menu>                           
                    </v-flex>
                </v-layout>
               
                <v-layout justify-end>
                    <v-btn :loading="carregando" color="success" type="button" id="btnSalvar" @click="salvar">Salvar</v-btn>
                    <v-btn :loading="carregando"  text color="error" type="button" id="btnCancelar" @click="cancelar">Cancelar</v-btn>
                </v-layout>
            </v-container>
             <hr>
         </form>
        `,
        data() {
            return {
                datepicker: false,
                carregando: false
                }
        },
        methods: {
            async salvar() {
                this.carregando = true;
                if (await this.$validator.validate()) {
                this.$store.dispatch('modtarefas/salvarTarefa', this.task);
                this.$store.dispatch('modalertas/showSucessSnackbar', 'Tarefa Salva com Sucesso');
                this.carregando = false;
                this.cancelar();
               } else {
                   this.$store.dispatch('modalertas/showErrorSnackbar', 'Preencha os Campos Obrigatórios');
                   this.carregando = false;
                }
            },
             cancelar() {
                this.task = {};
                this.$store.dispatch('modtarefas/limparEdicao');
                this.$emit('voltar');
             }
        },
        computed: {
            indiceEdicao() {
                return this.$store.state.modtarefas.indiceEdicao;
            },
            task: {
                get() {
                    return this.$store.getters['modtarefas/getTarefaEdicao'];
                },
                set() {
                }
            }
        }
           
    }
);