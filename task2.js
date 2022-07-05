// task 1

let sampleObject = {
    isItarable : false,
    sampleArray : [12,63,21,34,98,57]
}
function myFunction(){
if(sampleObject.isItarable == true){
    console.log(sampleObject[i]);
}else if( sampleObject.isItarable != true) {
    console.log("provided array isn't itarable");
}}
myFunction();

//task2

function checkPythagoras (a , b , c){
    if( a**2 + b**2 == c**2){
        console.log('true');
    }else if (c**2 + b**2 == a**2){
        console.log('true');
    }else if (a**2 + c**2 == b**2){
        console.log('true');
    }else{
        console.log('false');
    }
};

checkPythagoras (a , b , c);


//task3

let minMaxArray = [2,14,25,75,11,6]
function minMax (array){
    let max = array [0];
    let min = array [0];
    for(i = 0; i <array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    for(i = 0; i <array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return (`min value is ${min} and max value is ${max}`);

}
let result2 = minMax(minMaxArray);
console.log(result2);

//task 4

function angleFunction(x){
    if (0 < x  && x < 90){
        console.log('Acute angle');
    }else if(x == 90){
        console.log('Right angle');
    }else if (90 < x  && x < 180 ){
        console.log('Obtuse angle');
    }else if (x == 180){
        console.log('Straight angle');
    }else{
        console.log('ragaca nitoa');
    }
};
angleFunction(181)


//task 5
let students = [{name: 'student1', grade : 91}, {name:'student2' , grade : 71}, {name: 'student3', grade : 45} ]
function checkStudentGrade(){
    
    for(let i = 0; i < students.length; i++) {
        if (students[i].grade > 0 &&  students[i].grade < 50){
            students[i].finalResult = 'F';
            
        }else if (students[i].grade > 51 && students[i].grade< 60){
            students[i].finalResult ='E';
        }else if (students[i].grade > 61 && students[i].grade< 70){
            students[i].finalResult = 'D';
        }else if (students[i].grade > 70 && students[i].grade< 80){
            students[i].finalResult = 'C';
        }else if (students[i].grade> 81 && students[i].grade< 100){
            students[i].finalResult = 'A';
        }else{
            console.log('genia kopilxar');
        }
    }
    
}

checkStudentGrade();
console.log(students);


