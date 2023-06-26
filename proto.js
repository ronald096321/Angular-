// const lizard = {
//   name: "lizard",
//   fight() {
//     return "fighting";
//   },
// };

// const dragon = {
//   name: "dragon",
//   fight() {
//     return this.name + "fighting";
//   },
//   sing() {
//     return this.name + "singing";
//   },
// };

// lizard.__proto__ = dragon;
// console.log(lizard);

// function a(x) {
//   let a = x;
//   function get() {
//     return a;
//   }
// }

// console.log(a.__proto__);

// let obj1 = {
//   name: "vinay",
//   age: 25,
// };

// let obj2 = {
//   placeOfbirth: "Hubli",
//   education: "BE",
// };

// obj2 = Object.create(obj1);

// for (prop in obj2) {
//   console.log(prop);
//   console.log(obj2.placeOfbirth);
// }

// console.log(new Date().getFullYear());
// // function lastYear() {
// //   this.getFullYear
// // }

// // Date.
// //   Date.bind(lastYear);

// Date.prototype.lastYear = function () {
//   return this.getFullYear - 1;
// };

// function mul(a, b) {
//   return a * b;
// }

// let mul2 = mul.bind(this, 3);
// for (let i = 0; i < 10; i++) {
//   console.log(mul2(i + 1));
// }

// let obja = {
//   name: "Vinay",
//   age: 25,
//   lastname: "Kulkarni",
// };

// let objb = {
//   fullName(age) {
//     return this.name + " " + this.lastname + "Having age" + age;
//   },
//   age() {
//     return this.age;
//   },
// };

// let fullname = objb.fullName.bind(obja, 10);

// console.log(fullname());

// let newCall = objb.fullName.apply(obja, [11]);
// console.log(newCall);

// const Elf1 = new Function(
//   "name",
//   "place",
//   `this.name = name; this.place= place`
// );
// console.log(new Elf1("vinay", "India"));

// // A = Function(a, b, `a+b`);

// // B = new A(1, 2);
// // console.log(B);

// const per = {
//   firstname: "Vinay",
//   lastName: "Kulkarni",
// };

// a1 = function () {
//   return this.firstname + this.lastName;
// }.bind(per);

// console.log("Full anem", a1());
// console.log("xyz");

// class Student {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Subject extends Student {
//   constructor(fname, lname, subject1, subject2) {
//     super(fname, lname);
//     this.subject1 = subject1;
//     this.subject2 = subject2;
//   }

//   studentSubject() {
//     return (
//       "Student With full Name" +
//       this.firstName +
//       " " +
//       this.lastName +
//       " has " +
//       this.subject1 +
//       " and " +
//       this.subject2
//     );
//   }
// }

// let stud1 = new Subject("vivek", "singh", "Maths", "Sciene");
// console.log(stud1.studentSubject());

// console.log(Subject.prototype);

function Sum(a, b) {
  {
  }
  this.a = a;
  this.b = b;
}

Sum.prototype.add = function () {
  return this.a + this.b;
};

var x = new Sum(5, 6);
console.log(x.add());
