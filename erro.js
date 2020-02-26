//msg do erro do catch
function tratarErroElancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    // quando existi possibilidade de dar erro
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroElancar(e)
    }
    // vai executa independente no final
    finally{
        console.log('final')
    }
}

const obj = { name: 'roberto' }
imprimirNomeGritado(obj)
// tratando erro pra nao ir pro usuario o erro cru do sistema
