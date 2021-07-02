function evenArr(myArray) {
  const newArr = [];
  for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] % 2 === 0) {
      newArr.push(myArray[index]);
    }
  }
  return newArr;
}
console.log(evenArr([4, 2, 5, 5, 7, 89, 9, 3, 4]));
module.exports = evenArr;




async function revert() {
  function time1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log("time1");
      }, 3000);
    });
  }
  await time1();
  function time2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log("time2");
      }, 2000);
    });
  }
  await time2();
  function time3() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log("time3");
      }, 1000);
    });
  }
  await time3();
}
revert();




class Details {
  constructor(name, lerners, adress) {
    this.name = name;
    this.lerners = lerners;
    this.adress = adress;
  }
  show() {
    return `mySchool name is ${this.name}`;
  }
}
let print = new Details("soal", "dheeraj", "india");
console.log(print.show());
