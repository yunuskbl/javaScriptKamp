function addToCart(productName) {
    console.log(productName + " Sepetinize Eklendi")
}

addToCart("TV")

let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart2(product){
console.log("Urun Adi : "+product.productName)
}

addToCart2(product1);

// Sayılar değer tiptir
// Obje ve arrayler referans tiptir

let sayi1 = 10
let sayi2 = 20
sayi1=sayi2
// bu aşamada sayi1, sayi2'nin karşısındaki değere eşitleniyor. Stack'teki değere
sayi2=100
console.log(sayi1)

let product2 = {productName:"Elma",quantity:10,unitPrice:5}
let product3 = {productName:"Armut",quantity:8,unitPrice:4}
product2=product3
// Bu aşamada product2 ve product3 aynı referansa eşitleniyor, productName:"Armut" olan nesneye.
// product2'nin stackteki numarası product3'ün stackteki noya eşitleniyor yani ikiside aynı nesneyle eşleşiyor
product2.productName="Portakal"
console.log(product3.productName)

function addToCart3(products){
    console.log(products)
}

let products=[
    {productName:"Elma",quantity:10,unitPrice:5},
    {productName:"Erik",quantity:20,unitPrice:4},
    {productName:"Kiraz",quantity:24,unitPrice:6}
]
addToCart3(products)

function sum(...nums){
    let total=0
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
    }
    console.log(total)
}
sum(12,15,13,14,16)

let numbers =[12,45,34,56,2,24]
console.log(...numbers)
console.log(Math.max(...numbers))


