
const array:number[] = [15, 33, 2, 47, 9, 13, 72, 27, 83]

// Questões 1 
// Crie uma função que imprima este array ordenado em ordem crescente ou decrescente.
function sortArray():void{
    const result = array.sort(
        function(a, b) {
            return a - b;
        }
    );
    console.log(result);
}
sortArray();

// Questões 2 
// Crie uma função que imprima a soma dos itens deste array.
function sumArray():void{
    const initialValue = 0;
    const result = array.reduce((oldValue, currentValue) => oldValue + currentValue,
    initialValue);
    console.log(result);
}
sumArray();

// Questões 3 
// Crie uma função que receba um número como parâmetro e verifique 
// se ele existe no array imprimindo o resultado.
function numberExists(value:number):void{
    const result = array.includes(value);
    console.log(result);
}
numberExists(105); //false
numberExists(15); //true


// Questões 4 
// Crie uma função que receba um número como parâmetro 
// e imprima um array com todos os números maiores que ele.
function numbersBiggerThan(value:number):void{
    const result = array.filter(item => item >value);
    console.log(result);
}
numbersBiggerThan(15);


// Questões 5 
// Crie uma função que imprima as posições pares do array.
//  Resultado: [15, 2, 9, 72, 83]
function arrayIndexPair():void{
    const result = array.filter((item,index) => index%2===0);
    console.log(result);
}
arrayIndexPair();