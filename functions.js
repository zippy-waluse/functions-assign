// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function reverse(){
let name = ['Hua','Dira','Jean']
let secondname = name.sort() 
console.log(name.sort());
console.log(name.reverse())
}

reverse()


// console.log(reverse(names));

// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero

function arr = [1,2,3,-4,5,-6];

positive = 0,
negative = 0,
arr.forEach((item) => {
    if (item === 0) {
        positive++
    }
    else if (item <0 ){
        // negative++
        con


        function checkElements() {
            let arr =arr.forEach(element => {
               if (element > 0) {
                 console.log("positive");
               } else if (element < 0) {
                 console.log("negative");
               } else {
                 console.log("zero");
               }
            });
           }
    }

})









// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.