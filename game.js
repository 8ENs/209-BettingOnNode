var prompt = require('sync-prompt').prompt;
var colors = require('colors');
var money = prompt("How much do you want to start off with?");
console.log("You're starting off with $".underline + money + " - GOOD LUCK!".underline);
while (money >= 5) {
  var bet = prompt("What's your bet (between $5-$10)?".blue);
  while (bet < 5 || bet > 10 || bet != Math.round(bet)) {
    bet = prompt("Your bet must be an integer between $5-$10. Try again.".red.bold);
  }

  var num = prompt("Guess a number (between 1-10)".blue);
  while (num < 1 || num > 10 || num != Math.round(num)) {
    num = prompt("Your number must be an integer between 1-10. Try again.".red.bold);
  }

  i = Math.floor((Math.random() * 10) + 1);

  if (num == i) {
    money += bet * 2;
    console.log("Nailed it!".rainbow + " You doubled your $".green + bet + " bet & now have $".green + money);
  } else if (Math.abs(num - i) > 1) {
    money -= bet;
    console.log("Tough luck.".red + " " + i + " (random) is too far off ".red + num + ", so you're down to $".red + money);
  } else {
    console.log("Close call! Off by just one (random: " + i + "). You still have $" + money);
    // no change
  }
  console.log("");
  console.log("$".yellow + money + " remaining...".yellow);
}
