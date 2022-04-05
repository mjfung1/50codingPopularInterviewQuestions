
// time: O(n)
// space: O(n)

function firstRepeatingCharacter(str){
  // your code here
  let visited = new Set();
  
  for (let char of str) {
      if (visited.has(char)) return char;
      
      visited.add(char);
  }
  
  return '\0';
}