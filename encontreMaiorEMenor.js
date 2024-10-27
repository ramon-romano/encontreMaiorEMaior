function encontreMaiorEMenor(array) {
    let maior = array[0];
    let menor = array[0];
 
    for (let i = 1; i < array.length; i++) {
       maior = array[i] > maior ? array[i] : maior;
       menor = array[i] < menor ? array[i] : menor;
    }
 
    return { maior, menor };
 }
 
 console.log(encontreMaiorEMenor([4, 19, 63, 26, 2, 85, 17]));
 