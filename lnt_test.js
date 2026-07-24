// ======================================
// Task 1: Student Record System — Welcome Message
// ======================================
console.log("Welcome to the Student Record System!");


// ======================================
// Task 2: Student Record System — Declare and Update Variables
// ======================================
let systemName = "Student Record System";
let totalStudents = 5;

console.log(systemName);
console.log(totalStudents);


// ======================================
// Task 3: Student Record System — Identify Datatypes
// ======================================
let studentAge = 20;          // Number
let studentName = "Athul";    // String
let isPassed = true;          // Boolean

console.log(typeof studentAge);
console.log(typeof studentName);
console.log(typeof isPassed);


// ======================================
// Task 4: Student Record System — Perform a Calculation
// ======================================
let marks1 = 82;
let marks2 = 76;
let marks3 = 89;

let average = (marks1 + marks2 + marks3) / 3;

console.log("Average Marks:", average);


// ======================================
// Task 5: Student Record System — Classify a Record
// ======================================
let studentMarks = 58;

if (studentMarks >= 40) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}


// ======================================
// Task 6: Student Record System — Iterate Over Records
// ======================================
let students = [
    { name: "Athul", marks: 82 },
    { name: "Abel", marks: 95 },
    { name: "Adharsh", marks: 67 },
    { name: "Pavi", marks: 74 },
    { name : "Abin" , marks:50}
];

for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i].name}, Marks: ${students[i].marks}`);
}


// ======================================
// Task 7: Student Record System — Skip or Stop Early
// ======================================
for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 70) {
        continue; // Skip students below 70 marks
    }

    console.log(`${students[i].name} qualifies with ${students[i].marks} marks`);
}


// ======================================
// Task 8: Student Record System — Add & Find
// ======================================
students.push({ name: "Gokul", marks: 98 });

let topStudent = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > topStudent.marks) {
        topStudent = students[i];
    }
}

console.log("Highest Scorer:", topStudent.name, topStudent.marks);


// ======================================
// Task 9: Student Record System — Remove & Sort
// ======================================
students.shift(); // Removes Athul (first student)

students.sort((a, b) => a.marks - b.marks);

console.log(students);


// ======================================
// Task 10: Student Record System — Create and Print an Object
// ======================================
let student = {
    name: "Krishna",
    rollNumber: "24CSA118",
    age: 21,
    marks: 91,
    department: "Computer Science and Engineering"
};

console.log(student.name);
console.log(student.rollNumber);
console.log(student.age);
console.log(student.marks);
console.log(student.department);
