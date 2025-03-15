document.addEventListener('DOMContentLoaded', () => {
    // Objeto para armazenar dados temporariamente
    let data = {
        vendas: [],
        despesas: [],
        pedidos: [],
        transacoes: []
    };

    // Função para salvar os dados em JSON (simulação de salvamento)
    function saveData() {
        localStorage.setItem('dados', JSON.stringify(data));
        console.log("Dados salvos:", data);
    }

    // Função para carregar dados do localStorage
    function loadData() {
        const dadosSalvos = localStorage.getItem('dados');
        if (dadosSalvos) {
            data = JSON.parse(dadosSalvos);
            console.log("Dados carregados:", data);
        }
    }

    // Adicionar venda
    document.getElementById('adicionarVenda').addEventListener('click', () => {
        const venda = document.getElementById('vendaValor').value;
        if (venda) {
            data.vendas.push(venda);
            saveData();
        }
    });

    // Adicionar despesa
    document.getElementById('adicionarDespesa').addEventListener('click', () => {
        const despesa = document.getElementById('despesaValor').value;
        if (despesa) {
            data.despesas.push(despesa);
            saveData();
        }
    });

    // Enviar pedido
    document.getElementById('enviarPedido').addEventListener('click', () => {
        const pedido = document.getElementById('pedidoDescricao').value;
        if (pedido) {
            data.pedidos.push({ descricao: pedido, status: 'Em andamento' });
            saveData();
        }
    });

    // Excluir pedido
    document.getElementById('excluirPedido').addEventListener('click', () => {
        if (data.pedidos.length > 0) {
            data.pedidos.pop(); // Remove o último pedido (ajustar lógica conforme necessário)
            saveData();
        }
    });

    // Enviar transação
    document.getElementById('enviarTransacao').addEventListener('click', () => {
        const transacao = document.getElementById('transacaoDescricao').value;
        if (transacao) {
            data.transacoes.push(transacao);
            saveData();
        }
    });

    // Carregar dados ao iniciar
    loadData();
});
