const byId = (id) => document.getElementById(id);

const inputPotencia = byId('watts');
const inputHoras = byId('horas');
const inputBandeira = byId('bandeira');
const btnCalculo = byId('botao-calcular')
const resultado = byId('resultado');
const resultadoImg = byId('foto-lampada');
const arrayInputs = document.querySelectorAll('input');
const menuLista = byId('menu-section');
const tarifa = 0.75;

function calcularConsumo(watts,horas,bandeira){
    let consumoEmKwh = (watts * horas)/1000;
    let consumoEmReal = consumoEmKwh * (tarifa + bandeira);

    if (bandeira > 0) return consumoEmReal 
    else return consumoEmReal * tarifa
}

btnCalculo.addEventListener('click', ()=>{
    resultado.textContent = 'RESULTADO: ';
    const valorPotencia = Number(inputPotencia.value);
    const valorHoras = Number(inputHoras.value)
    const valorBandeira = Number(inputBandeira.value)
    const valorFinal = calcularConsumo(valorPotencia,valorHoras,valorBandeira);
    resultado.textContent += `R$ ${valorFinal.toFixed(2)}`;

    arrayInputs.forEach(function(campo){
        if(campo.value === ''){
            alert('Todos os campos devem ser preenchidos!');
            return;
        }
    });


    if (valorFinal <= 0.25){
         resultadoImg.src = '/INFOLIGHTFOA/ims/lampada-verde.png';
     } else if ((valorFinal >= 0.26) && (valorFinal < 2.00)){
          resultadoImg.src = '/INFOLIGHTFOA/ims/lampada-amarela.png'; 
     } else if (valorFinal > 2.00){
          resultadoImg.src = '/INFOLIGHTFOA/ims/lampada-vermelha.png';
    }
    
});

function clickMenu(){
    if(menuLista.style.display == 'block'){
        menuLista.style.display = 'none';
    } else{
        menuLista.style.display = 'block';
    }
}
