import Vue from 'vue';
import FormaterUtil from '../util/FormaterUtil';

export default Vue.component('detalhe-tarefa', {
    template:
    /*html */`
        <div>
          <h1>Detalhe Tarefa</h1>
          <h2>Titulo da Tarefa: {{tarefaSelecionada.titulo}}</h2>
          <p>Data prazo: {{FormaterUtil.formatarData(tarefaSelecionada.prazo)}}</p>
          <p>Descrição: {{tarefaSelecionada.descricao}}</p>
          <p>Situação da Tarefa: {{tarefaSelecionada.finalizado == 'true' ? 'Finalizado' : 'Pendente'}}</p>
        </div>
    `,
    props: {
      tarefaSelecionada: {}
    },
    data() {
       return {
           FormaterUtil : FormaterUtil
       }
    }
});