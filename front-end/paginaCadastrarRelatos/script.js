/*============================Validação Telefone Celular e Fixo=============================*/
// Função para aplicar máscara de telefone fixo ou celular
function aplicarMascaraTelefone(input) {
    let valor = input.value.replace(/\D/g, ""); // remove caracteres não numéricos

    if (valor.length <= 10) {
        // Telefone fixo: (XX) XXXX-XXXX
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
        // Celular: (XX) XXXXX-XXXX
        valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }

    input.value = valor;
}

// Função para validar se o número não é composto por dígitos iguais
function validarNumero(numero) {
    const apenasDigitos = numero.replace(/\D/g, ""); // só números
    return !/^(\d)\1+$/.test(apenasDigitos); // false se todos os dígitos forem iguais
}

// Referência ao campo de número
const campoNumero = document.getElementById("numero");

// Aplica máscara conforme digita
campoNumero.addEventListener("input", function () {
    aplicarMascaraTelefone(this);
});

// Validação individual (sem envio de formulário)
campoNumero.addEventListener("blur", function () {
    if (!validarNumero(this.value)) {
        alert("Número inválido: não pode ter todos os dígitos iguais.");
        this.value = ""; // limpa o campo para forçar novo preenchimento
    }
});
/*============================================================================================*/

/*======================================Validação Data========================================*/
// Função para validar a data
function validarData(input) {
    const valor = input.value; // formato ISO (YYYY-MM-DD)
    if (!valor) return false;

    const dataSelecionada = new Date(valor + "T00:00:00"); // força formato seguro
    const hoje = new Date();
    hoje.setHours(0,0,0,0); // zera horas para comparação

    // Limite inferior: 01/01/1990
    const limiteInferior = new Date("1990-01-01T00:00:00");

    // Validações
    if (dataSelecionada > hoje) {
        alert("Data inválida: não pode ser superior à data atual.");
        input.value = "";
        return false;
    }

    if (dataSelecionada < limiteInferior) {
        alert("Data inválida: não pode ser anterior a 1990.");
        input.value = "";
        return false;
    }

    return true;
}

// Referência ao campo de data
const campoData = document.getElementById("data_tentativa");

// Validação individual ao perder foco
campoData.addEventListener("blur", function () {
    validarData(this);
});

/*============================================================================================*/

/*========================================Envio ao Banco de Dados=============================*/
const formRelato = document.getElementById("formRelato");

formRelato.addEventListener("submit", async function(event) {
    event.preventDefault(); //Evita reload da página

    const dados = {
        tipo_golpe: document.getElementById("tipo_golpe").value,
        tipo_contato: document.getElementById("tipo_contato").value,
        data_tentativa: document.getElementById("data_tentativa").value,
        numero: document.getElementById("numero").value,
        banco: document.getElementById("banco").value,
        descricao: document.getElementById("descricao").value
    };


    try {
        const resposta = await fetch("http://localhost:3000/api/relatos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        });

        if (resposta.ok) {
            const resultado = await resposta.json();
            alert("✅ Cadastro realizado com sucesso!");
            //Redirecionar para tela de relatos
            window.location.href ='../paginaRelatos/index.html'; 
        } else {
            alert("❌ Erro ao cadastrar relato.");
        }
    } catch (erro) {
        console.error("Erro de conexão:", erro);
        alert("Não foi possível conectar ao servidor.");
    }
});
/*============================================================================================*/