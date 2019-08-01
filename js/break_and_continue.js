//first problem: Prompt the user for an odd number between 1 and 50. Use a loop and a break statement 
//to continue prompting the user if they enter invalid input.

// var userInput = prompt('Please enter an odd number between 1 and 50.')

// while((userInput % 2 == 0)) {
//     var userInput = prompt('Please enter an odd number between 1 and 50.')
//     console.log(userInput);
//     break;
// }

//second problem: Use a loop and the continue statement to output all 
//the odd numbers between 1 and 50, except for the number the user entered.

var userInput = prompt('Please enter a number between 1 and 50.')

console.log('Number to skip is: ' + userInput);
for(i = 1; i < 51; i++) {
    if(i % 2 == 0) {
        continue;
    } else if (i == userInput) {
        console.log('Yikes! Skipping number: ' + i);
    }
    console.log('Here is an odd number: ' + i);
}



