function comparaNumeros(x, y){
    if(isNaN(x) || isNaN(y)) return console.log("Defina dois números!")
    let numIguais = (x === y) ? 'são' : 'não são';
    let soma = (x + y);
    let comparaDez = (soma < 10) ? 'menor' : 'maior ou igual';
    let comparaVinte = (soma < 20) ? 'menor' : 'maior ou igual';

    console.log(`Os números ${x} e ${y} ${numIguais} iguais. Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`);

}

comparaNumeros(0, 10);