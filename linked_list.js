// Declare the node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to get random number between two values
function getRandomNumber(min, max){
  return Math.random() * (max - min) + min;
}
// [0 .................................... 1)
// [min - min ............................ max - min)

// Create the nodes for the linked list
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// Iterate through the linked list
let currentNode = node1;
while (currentNode) {
  console.log('currentNode: ', currentNode);
  currentNode = currentNode.next;
}

// Randomize the values inside the linked list nodes
currentNode = node1;
while (currentNode) {
  currentNode.data = getRandomNumber(1, 10);
  console.log("CurrentNode after randomizer: ",currentNode)  
  currentNode = currentNode.next;
}

// Find the lowest value in the linked list
currentNode = node1;
let lowestValue = node1.data;
while (currentNode) {
  lowestValue = currentNode.data < lowestValue ? currentNode.data : lowestValue;
  currentNode = currentNode.next;
}
console.log('lowest value in nodes: ', lowestValue);
