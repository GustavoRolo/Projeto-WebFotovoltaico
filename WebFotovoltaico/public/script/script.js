
function calcular(){

    console.log("Iniciando...")
        let consumo = document.getElementById("consumo");
        let resposta;
        console.log(consumo);
        let valor_consumo = parseInt(consumo.value);

        console.log(valor_consumo)
        
            if(valor_consumo > 0){
                console.log('Calculando');
                resposta = valor_consumo /30
                resultado.innerHTML = `<p> A sua média de geração diaria deve ser entorno de ${resposta.toFixed(2)} KWH</p>`;
            }else{
                
            }
           
    }
    