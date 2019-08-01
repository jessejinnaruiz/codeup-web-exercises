// linked to conditionals.html
// while loop prints to console the numbers 2 - 65536 doubling each number in each iteration
var i = 1;
while (i < 60000) {
    i = i * 2;
    console.log(i);
}

// calculate how many more items need to be sold given an invetory of x number of items using random numbers
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

do {
    let soldCones = (Math.floor(Math.random() * 5) + 1)
    if (soldCones > allCones) {
      console.log('Cannot sell ' + soldCones);
    } else {
      allCones = allCones - soldCones;
      console.log(soldCones + ' cones sold');
      console.log(allCones + ' cones left to sell');
      if(allCones == 0) {
        console.log('Yay! All sold!');
      }
    }
  } while(allCones > 0);