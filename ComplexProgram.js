/*
File Name: ComplexProgram.js

This code demonstrates a complex program that processes and analyzes student data.

*/

// Student class to represent a student
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  toString() {
    return `${this.name}, age ${this.age}, grade ${this.grade}`;
  }
}

// Function to generate random student data
function generateRandomStudents(numStudents) {
  const names = ["Alice", "Bob", "Carol", "David", "Eve"];
  const grades = [9, 10, 11, 12];

  const students = [];
  for (let i = 0; i < numStudents; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 4) + 14;
    const grade = grades[Math.floor(Math.random() * grades.length)];

    students.push(new Student(name, age, grade));
  }

  return students;
}

// Function to filter students by grade
function filterStudentsByGrade(students, grade) {
  return students.filter((student) => student.grade === grade);
}

// Helper function to calculate average age of students
function calculateAverageAge(students) {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// Helper function to find the oldest student
function findOldestStudent(students) {
  return students.reduce((oldest, student) => {
    if (student.age > oldest.age) return student;
    return oldest;
  }, students[0]);
}

// Main program
function main() {
  const students = generateRandomStudents(100);

  console.log("Generated Students:");
  students.forEach((student) => console.log(student.toString()));

  const grade10Students = filterStudentsByGrade(students, 10);
  console.log("\nGrade 10 Students:");
  grade10Students.forEach((student) => console.log(student.toString()));

  const averageAge = calculateAverageAge(students);
  console.log(`\nAverage Age of Students: ${averageAge.toFixed(2)}`);

  const oldestStudent = findOldestStudent(students);
  console.log(`\nOldest Student: ${oldestStudent.toString()}`);
}

main();