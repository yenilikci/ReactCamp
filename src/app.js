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
showProducts(10,"Elma","Armut","Karpuz") //10 ve (3) ["Elma", "Armut", "Karpuz"]
//parametre olarak array yollarsam?
showProducts(10,["Elma","Armut","Karpuz"]) //10 ve [Array(3)] , array içerisinde array gönderdi