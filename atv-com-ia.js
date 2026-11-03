let idAtual = 1;
const limiteInferior = 1; 
const limiteSuperior = 10; 


const imgElement = document.getElementById("pokemon-img");
const contarElement = document.getElementById("contarImg");

async function buscarPokemon(id) {
    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        if (!resposta.ok) {
            throw new Error(`Erro ao buscar Pokémon: ${resposta.status}`);
        }

        const dados = await resposta.json();
        
   
        imgElement.src = dados.sprites.front_default;
        

        contarElement.textContent = `Foto ${id} de ${limiteSuperior}`;

    } catch (erro) {
        console.error("Erro na requisição:", erro);
    }
}

function avancar(acao) {
        if (idAtual >= limiteSuperior) {
                alert("Você já está no ultimo pokemon!");
                return; 
    }

    idAtual++;
    buscarPokemon(idAtual);
}


function voltar(acao) {
    if (idAtual <= limiteInferior) {
        alert("Você já está no primeiro pokemon!"); 
    }

    idAtual--;
    buscarPokemon(idAtual);
}

buscarPokemon(idAtual);