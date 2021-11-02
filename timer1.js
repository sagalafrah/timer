

const inputArgs = process.argv //pass arguments into the command line
  .slice(2) 
  /*slice the argument at index 2 which becomes the first argument bc you dont want it to start at 0*/
  .filter(ticker => !isNaN(ticker)) 
  //filter out arguments that arent numbers
  .filter(ticker => ticker >= 0); 
  //filters out arguments that are not positive numbers

inputArgs.forEach((ticker) => {
    //loop through each argument and waits 1 second (1000 ms) before writing to the console
  setTimeout(() => {
    process.stdout.write('\x07'); 
    //this is the sound the computer makes
  }, ticker * 1000);
  //have to multiply by 1000 to get ms
});