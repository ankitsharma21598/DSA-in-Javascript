console.log("Linked List in JavaScript");


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head =null;
        this.size = 0;
    }

    // Insert at head 
    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    // Insert at index
    // Print
    // Remove at head
    // Remove element
    // search item
    // Middle of LL
}

let newList =new LinkedList();
newList.insertAtHead(10);
newList.insertAtHead(20);
console.log(newList);
