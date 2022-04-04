
// time: O(n)
// space: O(n)


function findPair(arr, k){
  // your code here
  let seen = new Set();
  
  for (let num of arr) {
      let neededNum = k - num;
      
      if (seen.has(neededNum)) return true;
      
      seen.add(num);
  }
  
  return false;
}