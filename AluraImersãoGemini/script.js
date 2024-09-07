const obraSecao = document.getElementById("obras-secao")

// Função que realiza a pesquisa e exibe os resultados
function pesquisar() {
    obraSecao.innerHTML = ""
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Verifica se o campo de pesquisa está vazio ou contém apenas espaços
    if (!campoPesquisa || campoPesquisa.trim() === "") {
        section.textContent = "Nenhuma arte encontrada"; // Exibe mensagem se a pesquisa estiver vazia
        return; // Encerra a função
    }

    // Variáveis para armazenar informações do dado
    let nome = "";
    let obra = "";
    let descricao = "";

    // Converte o valor de pesquisa para minúsculas
    let pesquisa = campoPesquisa.trim().toLowerCase();

    // Variável para armazenar o HTML dos resultados
    let resultados = "";

    // Itera sobre os dados para realizar a pesquisa
    for (let dado of dados) {
        // Converte os dados para minúsculas para comparação
        nome = dado.nome.toLowerCase();
        obra = dado.obraMaisFamosa.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase(); // Adiciona conversão para minúsculas

        // Verifica se o valor de pesquisa está presente no nome, obra, descrição ou tags
        if (nome.includes(pesquisa) || obra.includes(pesquisa) || descricao.includes(pesquisa) || tags.includes(pesquisa)) {
            // Adiciona o HTML dos resultados que correspondem à pesquisa
            resultados += `
            <div class="items">
                <div class="imagem">
                    <img class="imagem_artista" src="${dado.img}" alt="">
                </div>
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.linkWikipedia}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p class="descricão-meta">${dado.descricao}</p>
                    <a href="${dado.linkWikipedia}" target="_blank">Mais informações</a>
                </div>
            </div>`;
        }
    }

    

    // Atualiza a seção com os resultados encontrados
    section.innerHTML = resultados;
}

// Adiciona um listener para o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um listener para detectar o evento de tecla pressionada no campo de pesquisa
    document.getElementById('campo-pesquisa').addEventListener('keypress', function(event) {
        // Verifica se a tecla pressionada é Enter
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão, como enviar o formulário
            pesquisar(); // Chama a função pesquisar para realizar a pesquisa
        }
    });
});

