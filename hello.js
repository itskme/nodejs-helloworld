const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Please enter your name:");
rl.on("line", (name) => {
  const greeting = `Hello, ${name}`;
  console.log(greeting);
  rl.close();
});