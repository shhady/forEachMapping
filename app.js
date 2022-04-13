//? 1
// const arr2 = [];
// const arr23 = [2,5,33,2,132,232,21314,23,3,4];
// const doubleValues = (arr) => {
//      const newarray = arr.map(function (n){
//         return n*2
// })
//     return newarray;
// }
// console.log(doubleValues(arr2));

//? 2 
// const onlyEvenValues = (arr) =>{
//     const newArray =[];
//     arr.forEach(function (n) {
//        if (n % 2 === 0){
//            newArray.push(n);
//        } 
//      }) 
//     return newArray;
// }
// console.log(onlyEvenValues(arr23));

//?3 
// const arr3 = ['hi', 234, 33,'hola','amigos'];
// const howFirstAndLast = (arr)=>{
//     const newArray = [];
//     arr.forEach(function(n, idx) {
//         if (typeof n === 'string' && (idx === 0 || idx === arr.length - 1)){
//                 newArray.push(n); 
//         } 
//     })
//     return newArray;
//     }
// console.log(howFirstAndLast(arr3));

// //?4

// let str = 'Hi, let me know if you need anything';

// const vowelCount = (str) =>{
//     const obj ={};
//     const arr = str.toLowerCase().split('')
//     arr.forEach(function(n){
//         if(n === 'a' ||n === 'o' || n==='u'|| n==='e'|| n==='i'){
//              if(obj[n]){
//                  obj[n] += 1
//              } else {
//                  obj[n] = 1
//              }
//         } 
//     })
//      return obj;
// }

// console.log(vowelCount(str));

//?5

// let string = 'Hi, let me know if you need anything';
// const capitalize = (string) =>{
//     const arr2 = [''];
//     const arr1 = arr2.map(function(n){
//         return string.toUpperCase();
//     })
//     return arr1; 
// }
// console.log(capitalize(string));

// 6 

const shiftLetters = (str) => {
    let alphabet = "abcdeadyz";
    const arr = str.toLowerCase().split("");
    str = arr
      .map((letter) => {
        if (alphabet.indexOf(letter) !== -1) {
          if (alphabet.indexOf(letter) === 25) {
            return alphabet[0];
          } else {
            return alphabet[alphabet.indexOf(letter) + 1];
          }
        } else {
          return letter;
        }
      })
      .join("");
    return str;
  };


//7 
const swapCase = (str) => {
    const arr = str.split(" "),
      res = [];
    arr.forEach((word, idx) => {
      if (idx % 2) {
        res.push(capitalize(word));
      } else {
        res.push(word);
      }
    });
    return res.join(" ");
  };
  
  console.log(swapCase(str));