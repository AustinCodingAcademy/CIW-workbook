function fizzbuzz() {

//     for (var i = 0; i <= 100; i++) {
//
//         if (i % 5 === 0 && i % 3 === 0) {
//             document.write("Fuzzbuzz");
//         } else if (i % 3 === 0) {
//             document.write("Fuzz");
//         } else if (1 % 5 === 0) {
//             document.write("Buzz");
//         } else {
//             document.write(i);
//         }
//     }
// }

while (i<= 100) {
  if (i % 5 === 0 && i % 3 === 0) {
      document.write("Fuzzbuzz");
  } else if (i % 3 === 0) {
      document.write("Fuzz");
  } else if (1 % 5 === 0) {
      document.write("Buzz");
  } else {
      document.write(i);
  }
}
