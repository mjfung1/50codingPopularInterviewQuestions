
// Bubble Sort
// time:    O(n^2);
// space:   O(1);

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

// Parameters:
//  list: LinkedList
// return type: undefined

function sortList(list){
    // your code here
    let i = list.head;
    
    while (i) {
        
        let j = list.head;
        
        while (j.next) {
            
            if (j.data > j.next.data) {
                // [ j.data, j.next.data ] = [ j.next.data, j.data ];
                let temp = j.data;
                j.data = j.next.data;
                j.next.data = temp;
            }    
            
            j = j.next;
        }
        
        i = i.next;
    }
}