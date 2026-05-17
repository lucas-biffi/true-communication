/*===========================Listagem de Relatos Cadastrados====================================================================
document.addEventListener("DOMContentLoaded", async () => {
    const listaContainer = document.getElementById("listaRelatos");

    try {
        const resposta = await fetch("http://localhost:3000/api/relatos");
        
        if (resposta.ok) {
            const relatos = await resposta.json();
            
            if (relatos.length === 0) {
                listaContainer.innerHTML = "<p>Nenhum relato encontrado.</p>";
                return;
            }

            // Limpa o container e renderiza os dados
            listaContainer.innerHTML = "";
            relatos.forEach(relato => {
                const divCard = document.createElement("div");
                divCard.style.color = "black";
                divCard.style.backgroundColor = "white";
                divCard.style.border = "1px solid #ccc";
                divCard.style.padding = "14px";
                divCard.style.marginBottom = "10px";
                divCard.style.borderRadius = "8px";

                divCard.innerHTML = `
                    <h3>${relato.tipo_golpe}</h3>
                    <p><strong>Banco:</strong> ${relato.banco || 'Não informado'}</p>
                    <p><strong>Contato:</strong> ${relato.tipo_contato} - ${relato.numero || 'S/N'}</p>
                    <p><strong>Data da Tentativa:</strong> ${new Date(relato.data_tentativa).toLocaleDateString('pt-BR')}</p>
                    <p><strong>Descrição:</strong> ${relato.descricao}</p>
                    <hr>
                    <small>Registrado em: ${new Date(relato.data_registro).toLocaleString('pt-BR')}</small>
                `;
                listaContainer.appendChild(divCard);
            });
        } else {
            listaContainer.innerHTML = "<p>Erro ao carregar relatos.</p>";
        }
    } catch (erro) {
        console.error("Erro:", erro);
        listaContainer.innerHTML = "<p>Não foi possível conectar ao servidor.</p>";
    }
});
/*==============================================================================================================================*/

/*===========================Listagem de Relatos Cadastrados====================================================================*/
document.addEventListener("DOMContentLoaded", async () => {
    const listaContainer = document.getElementById("listaRelatos");

    try {
        const resposta = await fetch("http://localhost:3000/api/relatos");
        
        if (resposta.ok) {
            const relatos = await resposta.json();
            
            if (relatos.length === 0) {
                listaContainer.innerHTML = "<p>Nenhum relato encontrado.</p>";
                return;
            }

            // Limpa o container e renderiza os dados
    // Dentro do seu forEach no listaScript.js:
    listaContainer.innerHTML = "";
    relatos.forEach(relato => {
        const divCard = document.createElement("div");
        divCard.classList.add("card-relato"); // Adiciona a classe para o CSS acima

        divCard.innerHTML = `
            <h3>${relato.tipo_golpe}</h3>
            <p><strong>Banco:</strong> ${relato.banco || 'Não informado'}</p>
            <p><strong>Contato:</strong> ${relato.tipo_contato} - ${relato.numero || 'S/N'}</p>
            <p><strong>Data:</strong> ${new Date(relato.data_tentativa).toLocaleDateString('pt-BR')}</p>
            <p><strong>Descrição:</strong> ${relato.descricao}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 10px 0;">
            <small style="color: #999;">Registrado em: ${new Date(relato.data_registro).toLocaleString('pt-BR')}</small>
        `;
        listaContainer.appendChild(divCard);
    });
        } else {
            listaContainer.innerHTML = "<p>Erro ao carregar relatos.</p>";
        }
    } catch (erro) {
        console.error("Erro:", erro);
        listaContainer.innerHTML = "<p>Não foi possível conectar ao servidor.</p>";
    }
});
/*==============================================================================================================================*/
