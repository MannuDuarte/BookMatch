function recomendar(){

const marcados=document.querySelectorAll("input:checked");

const preferencias=[];

marcados.forEach(item=>{

preferencias.push(item.value);

});

let texto="<h2>Livros recomendados:</h2>";

livros.forEach(livro=>{

let combinar=livro.generos.some(g=>preferencias.includes(g));

if(combinar){

texto+="<p>📖 "+livro.nome+"</p>";

}

});

if(texto=="<h2>Livros recomendados:</h2>"){

texto+="Nenhum livro encontrado.";

}

document.getElementById("resultado").innerHTML=texto;

}