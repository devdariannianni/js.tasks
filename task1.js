// task 1
let usser1 = {
    firstname : 'ana',
    age : 28 ,

}

let usser2 = {
    firstname : 'levani' ,
    age : 21 ,
}

let levan = {
    age : 21 ,
}

let ana = {
    age : levan.age + 7 ,
}

console.log(ana.age);


//task2

let StudentsUssernames  = [ 'John' , 'Sam' , 'Ann' , 'Will' ,'Andrew' ,'Joseph' ,'Lorelai' ,'Amelie' ,'Den']

let MiddleNumber = ((StudentsUssernames.length - 1) / 2 )

let MiddleName = (StudentsUssernames[MiddleNumber])



console.log(MiddleName);

//task 3


var student = {
    firstName : 'Ani' ,
    lastName : 'Devdariani' ,
    age : 21 ,
    subjects : [ 'math' , ' Biology' , 'chemistry' , 'history' , 'english'] ,
    roommate : {
        fullname : 'nina tsiklauri' ,
        age : 21 
    }
}

console.log(student.subjects);

student.FullName = student.firstName + ' ' + student.lastName ;

var result = student.FullName + ' ' + 'is' + ' ' + student.age + ' ' + 'years old' + ' ' + 'and her roommate is' + ' ' + student.roommate.fullname ;

console.log(result);


//task 4

var array = [ "Banana" , "Orange" ,  "Apple" , "Mango" , 2 , 12 ]
i = 0 ;

while ( typeof array[i] === 'string'){
    
    console.log(array[i]);
    i++
}

// task 5

var arrayy = [12,23,43,11,9,2,121,90]

for (var i = 0 ; i < arrayy.length ; i++){
    if (arrayy[i] > 31 && arrayy[i] % 2 === 0 ){
        console.log('Element is greater than provided value and is EVEN');
    }
}
for (var i = 0 ; i < arrayy.length ; i++){
    if (arrayy[i] < 31 && arrayy[i] % 2 === 1 ){
        console.log('Element is less than provided value and is ODD');
    }
}