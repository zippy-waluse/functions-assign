// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order



function reverseStrings(arr){

  const reverseStrings =arr.map(str => [...str].reverse().join(''));
  console.log(reverseStrings);
  console.dm
}
reverseStrings(["Uganda","Tanzania","Malawi","Burundi","Burunfdi"]);



// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero



  // function checkElements(arr) {
  //  arr.forEach(element => {
  //  if (element > 0) {
  //  console.log("positive");
  // } else if (element < 0) {
  // console.log("negative");
  // } else {
  // console.log("zero");
  //  }
  // });
  // }
    
  // checkElements(1,2,3,4)

  function checkElement(array){

    array.forEach(element => {
      if (element > 0) {
        console.log(`${element} is positive`);
      }else if(element < 0){
        console.log(`${element} is negative`);
      }else {
        console.log(`${element} is zero`);
      }
    });
  }

  const numbers = [1,2,3,4];
  checkElement(numbers);


// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortEmployer(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
   }
   const employees = [
    { firstid: 1, name: 'Nur', salary: 50000 },
    { firstid: 2, name: 'Mia', salary: 60000 },
    { firstid: 3, name: 'Zila', salary: 45000 }
   ];
   const EmployeesSalary = sortEmployer(employees);
   console.log(EmployeesSalary);


// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function multiply(numbers) {
  numbers.forEach((number) => {
    console.log(number * 2);
  });
 }

 const numbersArray = [8, 7, 2, 4, 5];
   multiply(numbersArray);


   //Write a function

  function transformArray(numbers){
    numbers.forEach((number,index) => {
     if (index < 4){
        
      number[index] = number * 8
      
     }else if (index >= number.length -2){

      number[index] = number + 5;

     }
    })
console.log(numbers);
  }

  const sort = [1,2,3,4,5];
  transformArray(sort);