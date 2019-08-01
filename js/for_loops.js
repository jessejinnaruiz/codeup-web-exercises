// first problem: function that accepts a number and console.logs the multiplication table for that number

function showMultiplicationTable(number) {
    for (i = 1; i < 11; i++) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
    }
}


//second problem: Use a for loop and the code from the previous lessons to 
//generate 10 random numbers between 20 and 200 and output to the console 
//whether each number is odd or even.

let allNumbers = [];
function isItEvenOrOdd() {
    for(i=1; i<11; i++) {
        let randomNumber = Math.floor(Math.random() * 200) + 20;
        allNumbers.push(randomNumber);
        if(randomNumber % 2 == 0) {
            console.log(randomNumber + ' is even.');
        } else {
            console.log(randomNumber + ' is odd.');
        }
    }

}

//third problem: Create a for loop that uses console.log to create the output shown below.
for(i=1; i<10; i++) {
    console.log(String(i).repeat(i));
}

//fourth problem: Create a for loop that uses console.log to create the output shown below.
for(i=100; i>0; i=i-5) {
    console.log(i);
}

