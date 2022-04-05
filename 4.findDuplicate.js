
// time: O(n);
// space: O(n);

function findDuplicate(arr){
  // your code here
  let visited = new Set();
  
  for (let num of arr) {
      if (visited.has(num)) return num;
      
      visited.add(num);
  }
} 