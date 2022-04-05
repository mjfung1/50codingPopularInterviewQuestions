
// time: O(n)
// space: O(h) height of tree.


class Tree{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Parameters:
//  root: Tree
// return type: undefined

function dfsPreorder(root){
  // your code here
  if (!root) return [];
  
  let left = dfsPreorder(root.left);
  let right = dfsPreorder(root.right);
  
  return [ root.val, ...left, ...right ];
}

function dfsInorder(root){
  // your code here
  if (root === null) return [];
  
  let left = dfsInorder(root.left);
  let right = dfsInorder(root.right);
  
  return [ ...left, root.val, ...right ];
}

function dfsPostorder(root){
  // your code here
  if (root === null) return [];
  
  let left = dfsPostorder(root.left);
  let right = dfsPostorder(root.right);
  
  return [ ...left, ...right, root.val ];
}