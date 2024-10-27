# Função para Encontrar o Maior e o Menor Número em um Array

Este projeto contém uma função em JavaScript que encontra e retorna o maior e o menor número presentes em um array. A função percorre o array, comparando cada valor para identificar o maior e o menor número.

## Como funciona

A função `encontreMaiorEMenor(array)` recebe um array como argumento e utiliza duas variáveis (`maior` e `menor`) para armazenar o maior e o menor número, respectivamente. Inicialmente, ambas as variáveis são definidas como o primeiro elemento do array. Conforme percorre o array, a função atualiza as variáveis `maior` e `menor` de acordo com os valores encontrados.

### Exemplo

```javascript
function encontreMaiorEMenor(array) {
    let maior = array[0];
    let menor = array[0];
 
    for (let i = 1; i < array.length; i++) {
        maior = array[i] > maior ? array[i] : maior;
        menor = array[i] < menor ? array[i] : menor;
    }
 
    return { maior, menor };
}
 
console.log(encontreMaiorEMenor([4, 19, 63, 26, 2, 85, 17])); // { maior: 85, menor: 2 }
