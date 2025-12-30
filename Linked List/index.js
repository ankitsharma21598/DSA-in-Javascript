console.log("Linked List in JavaScript");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at head
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at index
  insertAtIndex(index, data) {
    if (index < 0 || index > this.size) {
      return "Invalid Index";
    }
    if (index === 0) {
      this.insertAtHead(data);
      return;
    }
    const newNode = new Node(data);
    let temp = this.head;

    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.size++;
  }

  // Print
  print() {
    let result = "";
    let temp = this.head;
    while (temp) {
      result += `${temp.data} -> `;
      temp = temp.next;
    }
    return result;
  }

  // Remove at head
  removeHead() {
    if (this.isEmpty()) {
      return "List is Already Empty";
    }
    this.head = this.head.next;
    this.size--;
  }

  // Check empty or not
  isEmpty() {
    return this.size === 0;
  }

  // Remove element by Index
  removeByIndex(index) {
    if (index < 0 || index > this.size) {
      return "Invalid Index";
    }
    if (index === 0) {
      this.removeHead();
    }
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
    this.size--;
  }

  // Remove element by value
  removeByValue(data) {
    if (this.isEmpty()) {
      return "List is Already Empty";
    }
    let curr = this.head;
    let prev = null;
    for (let i = 0; i < this.size; i++) {
      if (curr.data === data) {
        prev.next = curr.next;
        this.size--;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  // search item
  searchItem(data) {
    if (this.isEmpty()) {
      return "List is Already Empty";
    }
    let curr = this.head;
    let index = 0;
    for (let i = 0; i < this.size; i++) {
      if (curr.data === data) {
        return `Data Found at Index => ${index}`;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }
  // Middle of LL

  midOfLl() {
    if (this.isEmpty()) {
      return "List is Already Empty";
    }
    let temp = this.head;
    let index = 0;
    for (let i = 0; i < this.size/2-1; i++) {
      temp=temp.next
      index++;
    }
    return `we are Middle of LL where Index => ${index} and there Value =>${temp.data}`
  }
}

let newList = new LinkedList();
newList.insertAtHead(1);
newList.insertAtHead(2);
newList.insertAtHead(3);
newList.insertAtHead(4);

newList.insertAtIndex(2, 5);

// newList.removeHead();

// newList.removeByIndex(2);

// newList.removeByValue(5);

// console.log(newList.searchItem(5)); //'Data Found at Index => 2'

console.log(newList.midOfLl()); //'we are Middle of LL where Index => 2 and there Value =>5'


console.log(newList.print()); //'4 -> 3 -> 5 -> 2 -> 1 -> '

console.log(newList);
