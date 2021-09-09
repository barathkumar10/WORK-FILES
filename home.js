
/*
///for loop///
for (let num=0;num<100;num++){
    console.log(num);
}

for (let num=0;num<=100;num++){
    console.log(num);
}

///data types///
var yourAge=18;
let yourName='barath';
let name={first:'barath',last:'kumar'};
let truth=false;
let groceries=['apple','banana','oranges'];
let random;
let nothing=null;

//strings in js//

let fruit='banana';
let morefruits='banana\napple';   //new line
 
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(1,4));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));

// Arrays in js//
let fruits=['banana','apple','orange','pineapple'];
fruits= new Array('banana','apple','orange','pineapple');

//alert(fruits[2]);

fruits[0]='pear';
console.log(fruits);

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log('to string',fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.push('blackberries'), fruits);
console.log(fruits[4]);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let sumNumbers=[45,23,78,45,88,93,4566,566];
console.log(sumNumbers.sort());
console.log(sumNumbers.sort(function(a,b){return a-b}));
console.log(sumNumbers.sort(function(a,b){return b-a}));

let emptyArray=new Array();
for (let num=0;num<10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);


//objects in js///
let student={first:'barath',
last:'kumar',
age:25,
height:170
};
console.log(student.first);
console.log(student.last);
student.first='notbarath';
console.log(student.first);


///if conditions//
var age=prompt('what is your age?');

if((age>=18)&&(age<=35)){
    statu='target demo';
    console.log(statu);
}else{
    statu='not my audience';
    console.log(statu);
}
*/

//switch statement//

switch(6){
    case 0:
        text='weekend';
        break;
    case 5:
        text='weekend';
    case 6:
        text='weekend';

    default:
        text='weekday'
}
console.log(text);