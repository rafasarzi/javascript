function teste1(num){
    if(num >= 7)
        console.log(num)//ta identificando so uma senteca de cod
                        //por estar sem {} no bloco if
    console.log('Final')//esta fora do bloco if vai mostrar
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {//cuidado com o ';', nao usar com as estruturas de controle
    //só tirar o ';'    
    console.log(num)
    }
}

teste2(6)
teste2(8)