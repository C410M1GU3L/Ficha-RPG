var nome = document.querySelector("#nome")
var nivel = document.querySelector("#nivel")

document.getElementById("nivel").addEventListener("input", lerAtaque)
document.getElementById("forca").addEventListener("input", lerAtaque)
document.getElementById("agilidade").addEventListener("input", lerDefesa)
document.getElementById("armadura").addEventListener("input", lerDefesa)

nome.addEventListener("change",lerNome)

document.getElementById("d4Button").onclick = function(){
    var d4 = Math.floor(Math.random() * 4) + 1;
    document.getElementById("d4label").innerHTML = d4;
}

document.getElementById("d6Button").onclick = function(){
    var d6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("d6label").innerHTML = d6;
}

document.getElementById("d8Button").onclick = function(){
    var d8 = Math.floor(Math.random() * 8) + 1;
    document.getElementById("d8label").innerHTML = d8;

}

document.getElementById("d10Button").onclick = function(){
    var d10 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("d10label").innerHTML = d10;
}

document.getElementById("d12Button").onclick = function(){
    var d12 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("d12label").innerHTML = d12;
}

document.getElementById("d20Button").onclick = function(){
    var d20 = Math.floor(Math.random() * 20) + 1;
    document.getElementById("d20label").innerHTML = d20;
}

document.getElementById("d100Button").onclick = function(){
    var d100 = Math.floor(Math.random() * 100) + 1;
    document.getElementById("d100label").innerHTML = d100;
}

document.getElementById("d1000Button").onclick = function(){
    var d1000 = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("d1000label").innerHTML = d1000;
}

function lerNome() {
    nome.value = nome.value.replace("[INICIANTE]", "").replace("[VETERANO]", "")

    if (nome.value && nivel.value <= 4){
        nome.value += "[INICIANTE]"
    }
    else if (nome.value && nivel.value >= 5){
        nome.value += "[VETERANO]"
    }
}

function lerAtaque(){
    var nivel = parseInt(document.getElementById("nivel").value) || 0;
    var forca = parseInt(document.getElementById("forca").value) || 0;
    var poder = document.getElementById("poder")

    poder.value = ((forca - 10) / 2) + (nivel / 2);
}

function lerDefesa(){
    var agilidade = parseInt(document.getElementById("agilidade").value) || 0;
    var armadura = parseInt(document.getElementById("armadura").value) || 0;
    var defesa = document.getElementById("defesa")

    defesa.value = agilidade + armadura;
}