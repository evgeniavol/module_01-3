"use strict";

// const nameProduct = 'chairs';
// const amountProduct = 20;
// const categoryProduct = 'furniture';
// const priceProduct = 1500;
// const totalValue =  priceProduct * amountProduct;
// console.log('наименование товара: ', nameProduct);
// console.log('общая сумма товара: ', totalValue);

const nameProduct = prompt("Введите наименование товара");
const amountProduct = Number(prompt("Введите количество товара"));
const categoryProduct = prompt("Введите категорию товара", "furniture");
const priceProduct = Number(prompt("Введите цену товара"));
const totalValue =  priceProduct * amountProduct;
console.log(typeof nameProduct);
console.log(typeof amountProduct);
console.log(typeof categoryProduct);
console.log(typeof priceProduct);
console.log(`На складе ${amountProduct} \"${nameProduct}"\ на сумму ${totalValue} рублей`);
