//değişken tanımlarken kullandığımız keywordler
//var, let, const
var sayi1 = 10 //; opsiyonel

//sayi1 = "String Deger"

var sayi1 = "String Deger"

let sayi2 = 10

//let sayi2 = "String Deger"

let sayi3 = 10

sayi3 = "String deger"

sayi3 = {
    id: 1,
    name: 'Engin'
}

student = {
    id: 1,
    name: 'Engin'
} //student is not defined

let student = {
    id: 1,
    name: 'Engin'
}
console.log(student)


/*
function save(params){
    console.log("Saved")
}
save();
*/


/*
function save(ogrenci){
    console.log(ogrenci);
}
save(); //undefined
*/


function save(ogrenci) {
    console.log(ogrenci);
}
save(student); //{id: 1, name: "Engin"}
save(15); //15


function save1(ogrenci, puan = 10) {
    console.log(ogrenci.name + ' : ' + puan);
}
save1(student); //Engin : 10
save1(student, 100); //Engin : 100


function save2(puan = 10, ogrenci) {
    console.log(ogrenci.name + ' : ' + puan);
}
//save2(student); //'name' of undefined
save2(undefined, student); //Engin : 10


let students = [
    'Student1',
    'Student2',
    'Student3'
];
console.log(students); //(3) ["Student1", "Student2", "Student3"]


let students2 = [
    student,
    {
        id: 2,
        name: 'Student2'
    }
]
console.log(students2); //(2) [{…}, {…}]


let students3 = [
    student,
    {
        id: 2,
        name: 'Student2'
    },
    "Ankara",
    {
        city: "İstanbul"
    }
]
console.log(students3); //(4) [{…}, {…}, "Ankara", {…}]


//rest (c#->params , java->varArgs)
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products);
}
console.log(typeof showProducts); //function
showProducts() //undefined ve []
showProducts(10, "Elma", "Armut", "Karpuz") //10 ve (3) ["Elma", "Armut", "Karpuz"]
//parametre olarak array yollarsam?
showProducts(10, ["Elma", "Armut", "Karpuz"]) //10 ve [Array(3)] , array içerisinde array gönderdi

//(...values: number[]): number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //10
console.log(Math.max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //NaN

//spread (ayrıştırmak)
//değer array olarak geliyor olsaydı
let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...points); //1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...points)); //10
console.log(..."ABC", "D", ..."EFG", "H"); //A B C D E F G H


//Destructuring
//Elimizdeki array'in değerlerini değişkenlere atamak
let populations = [10000, 20000, 30000]
let [small, medium, high] = populations //populations arrayini sırasıyla small,medium,high değerlerine aktardık
console.log(small); //10000
console.log(medium); //20000
console.log(high); //30000


let populations2 = [10000, 20000, 30000, [40000, 100000]]
let [small2, medium2, high2, veryHigh2, maximum2] = populations2
console.log(small2); //10000
console.log(medium2); //20000
console.log(high2); //30000
console.log(veryHigh2); //[40000,100000]
console.log(maximum2); //undefined


let populations3 = [10000, 20000, 30000, [40000, 100000]]
let [small3, medium3, high3, [veryHigh3, maximum3]] = populations3
console.log(small3); //10000
console.log(medium3); //20000
console.log(high3); //30000
console.log(veryHigh3); //40000
console.log(maximum3); //100000


function someFunction([smallx], number) {
    console.log(smallx);
}
someFunction(populations) //10000


let category = {
    id: 1,
    name: "İçecek"
}
console.log(category.id); //1
console.log(category["name"]); //içecek
//obje destruct
let {id,name} = category;
console.log(id); //1
console.log(name); //içecek


