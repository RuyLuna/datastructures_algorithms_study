// Declare the node class
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

// Create the nodes for the linked list
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

// This is a singly linked list, there also:
//   A double linked list, would have another property called previous that points to the previous node
//   A circular linked list, the last node would point to the first node
node1.next = node2;
node2.next = node3;
node3.next = node4;

// Iterate through the linked list
currentNode = node1;
while(currentNode){
  console.log("currentNode: ",currentNode);
  currentNode = currentNode.next;
}
