## Install 

via npm 
```bash
npm install ds-sll
```
via git
```bash
git clone https://github.com/scriptnull/ds-sll.git
```
## Usage 
```javascript
var ds = require('ds-sll');
 , LinkedList = ds.LinkedList
 , Node = ds.Node ;
```

## Node
Nodes are elementary blocks of Linked List. To maintain data within Linked List, use Node objects as containers. Nodes have data and a pointer to next node.

### Creating a node 
```javascript 
var numberNode = new Node(1);
var stringNode = new Node('yo');
var objectNode = new Node({ foo : 'bar'});
```

### Properties
```javascript 
var node = new Node(1);
console.log(node.data);  //1 - data of node
console.log(node.next);  //null - next pointer
```

### Methods
- setNext() 
- getNext()

## Linked List
Singly Linked Lists are collection of Node objects having only next pointer.

### Creating a Linked List 
```javascript
var ll = new LinkedList();
```

### Properties
```javascript
var ll = new LinkedList();
console.log(ll.length); // 0 - length of linked list
console.log(ll.head);   // null - head of the linked list
```

### Methods 
- insertAtHead(node)
- insertAtTail(node)
- insertAtPosition(node,position)
- deleteAtHead()
- deleteAtTail()
- deleteAtPosition(position)
- getDataAtPosition(position)
- findPositionByData(data)

