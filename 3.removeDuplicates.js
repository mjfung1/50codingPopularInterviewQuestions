
// time: O(n);
// space: O(n);

function removeDuplicates(arr){
    // your code here
    const visited = new Set();
    const output = [];
    
    for (let num of arr) {
        if (!visited.has(num)) {
            visited.add(num);
            output.push(num);
        }
    }
    
    return output;
}