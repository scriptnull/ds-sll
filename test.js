var ds = require('./index.js')
 , LinkedList = ds.LinkedList
 , Node = ds.Node
 , assert = require('assert');


describe('Node' , function(){

	describe('init' , function(){
		it('should create a Node instance' , function(){
			assert.ok(new Node(1));
		});

		it('should create node with no data' , function(){
			assert.ok(!new Node().data);
		});

		it('should create node with object type data' , function(){
			assert.ok(typeof new Node({}).data === 'object');
		});
	});

	describe('setters and getters' , function(){
		var a , b ;
		before(function(){
			a = new Node(1);
			b = new Node(2);
		});

		it('should set the next node for current node', function(){
			a.setNext(b);
			assert.ok(a.next === b);
		});

		it('should get the next node for current node' , function(){
			assert.ok(a.getNext() === b);
		});
	});

});

describe('Linked List' , function(){

	describe('init' , function(){

		it('should create a Linked List instance' , function(){
			var ll = new LinkedList();
			assert.ok(ll);
			assert.ok(ll.length === 0);
			assert.ok(ll.head === null);
		});

	});

	describe('show()' , function(){
		var ll , emptyList ;
		before(function(){
			ll = new LinkedList();
			var a = new Node(1);
			var b = new Node(2);
			var c = new Node(3);
			a.setNext(b);
			b.setNext(c);
			ll.head = a ;
			emptyList = new LinkedList();
		});
		it('should visualize empty Linked List' , function(){
			assert.ok(emptyList.show() === '');
		});
		it('should visualize Linked List with one node' , function(){
			emptyList.head = new Node(1);
			assert.ok(emptyList.show() === '1');
		});
		it('should visualize the Linked List' , function(){
			assert.ok(ll.show() === '1 -> 2 -> 3');
		});
	});

	describe('insertAtHead()' , function(){
		var ll ;
		before(function(){
			ll = new LinkedList();
		});

		it('should insert node at head' , function(){
			var node = new Node(1);
			ll.insertAtHead(node);

			assert.ok(ll.length === 1);
			assert.ok(ll.head === node);
			assert.ok(ll.head.getNext() === null);
		});

		it('should insert node before head' , function(){
			var node = new Node(2);
			ll.insertAtHead(node);

			assert.ok(ll.length === 2);
			assert.ok(ll.head === node);
			assert.ok(ll.head.getNext() !== null);
		});

		it('should check visually' , function(){
			assert.ok(ll.show() === '2 -> 1');
		});

	});

	describe('insertAtTail()' , function(){
		var ll ;
		before(function(){
			ll = new LinkedList();
		});

		it('should insert node at tail' , function(){
			var node = new Node(1);
			ll.insertAtTail(node);

			assert.ok(ll.length === 1);
			assert.ok(ll.head === node);
			assert.ok(ll.head.getNext() === null);
		});

		it('should insert node after tail' , function(){
			var node = new Node(2);
			ll.insertAtTail(node);

			assert.ok(ll.length === 2);
			assert.ok(ll.head.next === node);
		});

		it('should check visually' , function(){
			assert.ok(ll.show() === '1 -> 2');
		});

	});


	describe('insertAtPosition()' , function(){
		var ll ;
		before(function(){
			ll = new LinkedList();
		});

		it('should insert node at head' , function(){
			var node = new Node(1);
			ll.insertAtPosition(node , 0 );

			assert.ok(ll.length === 1);
			assert.ok(ll.head === node);
			assert.ok(ll.head.getNext() === null);
		});

		it('should insert at tail' , function(){
			var node = new Node(2);
			ll.insertAtPosition(node , 2);

			assert.ok(ll.length === 2);
			assert.ok(ll.head.next === node);
		});

		it('should insert in middle' , function(){
			var node = new Node(3);
			ll.insertAtPosition(node , 2);

			assert.ok(ll.length === 3);
		});

		it('should check visually' , function(){
			assert.ok(ll.show() === '1 -> 3 -> 2');
		});

	});

	describe('deleteAtHead()' , function(){
		var ll , a , b , c;
		before(function(){
			ll = new LinkedList();
			a = new Node(1);
			b = new Node(2);
			c = new Node(3);
			ll.insertAtTail(a);
			ll.insertAtTail(b);
			ll.insertAtTail(c);
		});

		it('should delete head node' , function(){
			ll.deleteAtHead();

			assert.ok(ll.length === 2);
			assert.ok(ll.head === b);
		});

		it('should check visually' , function(){
			assert.ok(ll.show() === '2 -> 3');
		});
	});

	describe('deleteAtTail()' , function(){
		var ll , a , b , c;
		before(function(){
			ll = new LinkedList();
			a = new Node(1);
			b = new Node(2);
			c = new Node(3);
			ll.insertAtTail(a);
			ll.insertAtTail(b);
			ll.insertAtTail(c);
		});

		it('should delete tail node' , function(){
			ll.deleteAtTail();

			assert.ok(ll.length === 2);
			assert.ok(ll.head.next.next === null);
		});

		it('should check visually' , function(){
			assert.ok(ll.show() === '1 -> 2');
		});
	});

	describe('deleteAtPosition()' , function(){

		context('when Linked List is empty' , function(){
			var ll , a , b , c;
			before(function(){
				ll = new LinkedList();
			});

			it('should not delete anything' , function(){
				ll.deleteAtPosition(1);
			});

		});


		context('when Linked List is not empty' , function(){
			var ll , a , b , c;
			before(function(){
				ll = new LinkedList();
				a = new Node(1);
				b = new Node(2);
				c = new Node(3);
				ll.insertAtTail(a);
				ll.insertAtTail(b);
				ll.insertAtTail(c);
			});

			it('should delete head node' , function(){
				ll.deleteAtPosition(0);
				assert.ok(ll.length === 2);
			});
			it('should check visually' , function(){
				assert.ok(ll.show() === '2 -> 3');
			});
			it('should delete head node' , function(){
				ll.deleteAtPosition(2);
				assert.ok(ll.length === 1);
			});
			it('should check visually' , function(){
				assert.ok(ll.show() === '2');
			});
		});

	});

	describe('getDataAtPosition()' , function(){
		var ll , emptyList ;
		before(function(){
			ll = new LinkedList();
			emptyList = new LinkedList();

			var a = new Node(1);
			var b = new Node(2);
			var c = new Node(3);
			ll.insertAtTail(a);
			ll.insertAtTail(b);
			ll.insertAtTail(c);
		});

		context('when Linked List is empty' , function(){
			it('should return null' , function(){
				assert.ok(emptyList.getDataAtPosition(1) === null);
			});
		});

		context('when Linked List is not empty' , function(){
			it('should return correct data' , function(){
				assert.ok(ll.getDataAtPosition(1) , 1);
				assert.ok(ll.getDataAtPosition(2) , 2);
				assert.ok(ll.getDataAtPosition(3) , 3);
			});
		});

	});

	describe('findPositionByData()' , function(){
		var ll , emptyList ;
		before(function(){
			ll = new LinkedList();
			emptyList = new LinkedList();

			var a = new Node(1);
			var b = new Node(2);
			var c = new Node(3);
			ll.insertAtTail(a);
			ll.insertAtTail(b);
			ll.insertAtTail(c);
		});

		context('when Linked List is empty' , function(){
			it('should return -1' , function(){
				assert.ok(emptyList.findPositionByData(1) === -1);
			});
		});

		context('when Linked List is not empty' , function(){
			it('should return correct position' , function(){
				assert.ok(ll.findPositionByData(1) , 1 );
				assert.ok(ll.findPositionByData(2) , 2);
				assert.ok(ll.findPositionByData(3) , 3);
			});
			it('should return -1 if data not found' , function(){
				assert.ok(ll.findPositionByData(4) , -1);
			});
		});

	});

});
