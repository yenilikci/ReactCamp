//değişken tanımlarken kullandığımız keywordler
//var, let, const
var sayi1 = 10 //; opsiyonel

//sayi1 = "String Deger"

var sayi1 = "String Deger"

let sayi2 = 10

//let sayi2 = "String Deger"

let sayi3 = 10

sayi3 = "String deger"

sayi3 = {id:1,name:'Engin'}

student = {
    id:1,
    name:'Engin'
} //student is not defined

let student = {
    id:1,
    name:'Engin'
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


function save(ogrenci){
    console.log(ogrenci);
}
save(student); //{id: 1, name: "Engin"}
save(15); //15


function save1(ogrenci,puan=10){
    console.log(ogrenci.name + ' : ' + puan);
}
save1(student); //Engin : 10
save1(student,100); //Engin : 100


function save2(puan=10,ogrenci){
    console.log(ogrenci.name + ' : ' + puan);
}
//save2(student); //'name' of undefined
save2(undefined,student); //Engin : 10