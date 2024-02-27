// let num = prompt("Enter a number :")
// if(num >= 90 && num <= 100){
//     console.log("A grade")
// }else if(num >= 80 && num <= 89){
//     console.log("B grade")
// }else if(num >= 70 && num <= 79){
//     console.log("C grade")
// }else if(num >= 60 && num <= 69){
//     console.log("D grade")
// }else{
//     console.log("F grade")
// }
// __define-ocg__
function ArrayChallenge(num) {
    var numList = [];
    var numIterations = 0; // Using varOcg as a variable name
  
    // Function to check for adjacent duplicate numbers
    function hasAdjacentDuplicate(arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          return true;
        }
      }
      return false;
    }
  
    // Function to split a number into its digits and add them to the list
    function addDigitsToList(n) {
      while (n > 0) {
        numList.push(n % 10);
        n = Math.floor(n / 10);
      }
    }
  
    // Initial step: add single digits to the list
    addDigitsToList(num);
  
    // Loop until adjacent duplicate numbers are found
    while (!hasAdjacentDuplicate(numList)) {
      numIterations++;
      // Multiply the original number by one of its own digits
      var randomIndex = Math.floor(Math.random() * numList.length); // Choose a random index from the list
      num *= numList[randomIndex]; // Multiply the number by the digit at that index
      numList = []; // Reset the list
      addDigitsToList(num); // Add digits of the new number to the list
    }
  
    return numIterations;
  }
  
  // Test cases
//   console.log(ArrayChallenge(134)); // Output: 1
  console.log(ArrayChallenge(8));   // Output: 3
  