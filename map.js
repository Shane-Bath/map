/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}

console.log(results); // [ 2, 4, 6, 8, 10 ]

// Using map()
const multByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);
console.log(mapResults); // [ 2, 4, 6, 8, 10 ]

// Simplified w/ map()
const simplified = nums.map(function (num) {
  return num * 2;
});
console.log(simplified); //[ 2, 4, 6, 8, 10 ]

// Simplfied w/ map() + arrow function
const arrowFun = nums.map((num) => num * 2);
console.log(arrowFun); //[ 2, 4, 6, 8, 10 ]

// With objects:
const students = [
  {
    id: 1,
    name: "Mark",
    profession: "Developer",
    skill: "JavaScript",
  },
  {
    id: 2,
    name: "Ariel",
    profession: "Developer",
    skill: "HTML",
  },
  {
    id: 3,
    name: "Jason",
    profession: "Designer",
    skill: "CSS",
  },
];

const studentsWithIds = students.map((student) => [
  student.name,
  student.id,
  student.profession,
]);
console.log(studentsWithIds);

//we're using destructuring assignment to create two variables john and rest. The first variable john will contain the name and results of the first student in the students array, 
//and the second variable rest will contain an array of arrays, each containing the name and results of the remaining students.
//We're using the map method to transform each item in the students array into a new array containing the name and results of that student. 
//We're using destructuring assignment again inside the arrow function to extract the name and results properties from each item in the students array.
//Finally, we're logging out the values of john and rest to the console to verify that they contain the expected values.

let students = [
  {
    name: "John",
    subjects: ["maths", "english", "cad"],
    teacher: { maths: "Harry", english: "Joan", cad: "Paul" },
    results: { maths: 90, english: 75, cad: 87 },
  },
  {
    name: "Emily",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 80, art: 95 },
  },
  {
    name: "Adam",
    subjects: ["science", "maths", "art"],
    teacher: { science: "Iris", maths: "Harry", art: "Simon" },
    results: { science: 93, maths: 77, art: 95 },
  },
  {
    name: "Fran",
    subjects: ["science", "english", "art"],
    teacher: { science: "Iris", english: "Joan", art: "Simon" },
    results: { science: 93, english: 87, art: 95 },
  },
];

let [john, ...rest] = students.map(({ name, results }) => [name, results]);

console.log(john); //[ 'John', { maths: 90, english: 75, cad: 87 } ]
console.log(rest); // [ [ 'Emily', { science: 93, english: 80, art: 95 } ],
                   //   [ 'Adam', { science: 93, maths: 77, art: 95 } ],
                  //    [ 'Fran', { science: 93, english: 87, art: 95 } ] ]

