alert("Welcome to my Website! Woop!");

var userInput = prompt('What\'s your favorite color?');
alert('Cool! I like ' + userInput + ' too!');


console.log('Hello from external JavaScript.');

//problem 1: Movie rental cost prompt: Little Mermaid rented for 3 days, Brother Bear rented for 5 days and Hercules rented for 1 day..
var costPerDay = prompt('How much does a movie cost per day?')
var rentalCost = Math.round((1*costPerDay)+(3*costPerDay)+(5*costPerDay))
alert('The total cost of renting these movies is $'+rentalCost)

//problem 2: Total pay for work: Google pays $400 per hour, Amazon pays $380 per hour, and Facebook pays $350 per hour.

var hoursWorkedGoogle = prompt('How many hours did you work for Google?')
var hoursWorkedAmazon = prompt('How many hours did you work for Amazon?')
var hoursWorkedFacebook = prompt('How many hours did you work for Facebook?')
var totalPay = Math.round((400*hoursWorkedGoogle)+(hoursWorkedAmazon*380)+(hoursWorkedFacebook*350))

alert('You get paid $' + totalPay + ' in total from Google, Amazon and Facebook!')
