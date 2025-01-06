let produts = [
    {name:"Camisa",preco:"300kz"},
    {name: "Sapato",preco:"500kz"},
    {name: "Cinto",preco:"200kz"}
];

let changs = produts.map(function(produt){
    return{
        name: produt.name,
        precoOriginal:produt.preco,
        Disconto:produt.preco * 0.9
    };
});

console.log(changs);

let numbers = [1,3,2,5];

let resultado = [];

let numb = numbers.map(function(num){

    resultado.push(num*2);
});

console.log(resultado);