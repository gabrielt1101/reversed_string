//the string reverse class to display the letters in reverse
function reverseText(str){
  ////used to collect the letters in reversed order
  let r = "";
  //for loop to move through the string in order to display it in reverse
  for(let i = str.length-1; i >= 0; i--){
    //adds the letter to 'r' at the given position
    r += str[i];
  }
  //returns the reversed text
  return r;
}

//input:I Love TTP output:PTT evoL I 
console.log(reverseText("I Love TTP"))