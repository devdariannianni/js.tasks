

//  დავალება 1
let  user = {
  firstname: 'giorgi',
  lastname: 'smith',
  age: 25,
  studentstatus: active
};

console.log(user.studentstatus);


//  დავალება 2

let usernames = [ 'gela', 'zviadi', 'ani']
console.log(usernames[0]);
console.log(usernames[1]);
console.log(usernames[2]);


// დავალება 3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x of numbers){
  if ( x > 5 ) {
    console.log(x);
  }
}



// დავალება 4

let usser = {
	name: 'giorgi',
	age:  20,
	studentstatus: 'active'
}
if ( usser.age > 18 && usser.studentstatus == 'active'){
  console.log('hello');
} else if ( usser.name == 'levan'){
  console.log('hello giorgi');
} else if (( usser.studentstatus == 'active') ||  (usser.age < 25)) {
  console.log('hello world');}
  else {
    console.log('error');
  }


// დავალება 5
let array = [ 'ratermalon', 'pear', 10, 45, 50, 'apple', 'ananas']
for( x of array ){
  if (typeof x == 'string'){
    console.log(x);
  }
}

// დავალება 6

let arrayy = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
for(x of arrayy){
  
  for (let y of x ){
    if (y > 0 ){
      console.log(y);
    }
  }
  }



// დავალება 7

let arraay = [32, 10, 'hello', null, 'hello2', 50 ]
for( x of arraay){
  if (typeof x == 'number' && x % 5 == 0) {
    console.log(x);
  }
}

