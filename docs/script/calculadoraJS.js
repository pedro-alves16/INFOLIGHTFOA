const byId = id => document.getElementById(id);

const inputPotencia = byId('potencia');
const inputDiasMes = byId('dia');
const inputHoras = byId('horas');
const inputTarifa = byId('tarifa');
const botao = byId('botaoCalculo');

const consumoMensalTexto = document.querySelector('.mensal');
const custoMensalTexto = document.querySelector('.custo');
const custoDiarioTexto = document.querySelector('.diario');
const divResultados = document.querySelector('.calculadora-resultados');

let tarifa = 0.75;

const calcularConsumoKwh = (potencia, horas) => (potencia * horas)/1000

const calcularConsumoEmRealDia = (consumoEmKwh, tarifa) => consumoEmKwh * tarifa;

const calcularCustoMensalEmReal = (gastoEmRealDia) => gastoEmRealDia * 30;

const consumoMensalEmKwh = (gastoDiarioKwh) => gastoDiarioKwh * 30;


botao.addEventListener('click', (e) =>{
    e.preventDefault();
    const valorPotencia = Number(inputPotencia.value);
    const valorDias = Number(inputDiasMes.value);
    const valorHoras = Number(inputHoras.value);
    const valorTarifa = tarifa;

    const resultadoKwh = calcularConsumoKwh(valorPotencia, valorHoras);

    const resultadoKwhMensal = consumoMensalEmKwh(resultadoKwh);

    consumoMensalTexto.innerText = `${resultadoKwhMensal} Kwh`;

    const resultadoCustoDiario = calcularConsumoEmRealDia(resultadoKwh, tarifa);
    
    const resultadoCustoMensal = calcularCustoMensalEmReal(resultadoCustoDiario);

    custoMensalTexto.innerText = ` R$ ${resultadoCustoMensal.toFixed(2)}`;

    custoDiarioTexto.innerText = `R$ ${resultadoCustoDiario.toFixed(2)}`;

    divResultados.style = 'Display: block';
})