function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function main(){
    let resultado = 0

    for(let i = 1; i <= 3; i++){
        let x = randomInt(1,10)
        let y = randomInt(1,10)

        let tabuada1 = prompt(`${x} * ${y}`);
        if (tabuada1 == x*y){
            alert("certo")
            resultado += 10
        } else {
            alert("errou")
        }
    }
        document.write('Seu resultado foi: ', resultado)
}
main()