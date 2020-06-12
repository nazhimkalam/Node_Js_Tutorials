// variables
let num1 = 10;
let num2 = 20;

//functions
const displayName = (name) => "Good Morning " + name;

// Creating a Class
class Student {
  constructor(name, age) {
    this.studentName = name;
    this.studentAge = age;
  }
  getName() {
    return this.studentName;
  }
  getAge() {
    return this.studentAge;
  }
}
exports.num1 = num1;
exports.num2 = num2;
exports.displayName = displayName;
exports.Student = Student;
