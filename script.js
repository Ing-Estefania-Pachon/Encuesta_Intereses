let votos = {
    JavaScript : 0,
    DiseñoWeb : 0,
    BaseDatos : 0,
}

let totalVotos = 0

function votar(click){
    votos[click]++;
    totalVotos ++;

    alert("¡Gracias por tu voto!");

    document.getElementById("votos-js").textContent = votos.JavaScript;
    document.getElementById("votos-dw").textContent = votos.DiseñoWeb;
    document.getElementById("votos-bd").textContent = votos.BaseDatos;
    
    console.log(votos);

}