module.exports = (function(){

	var Node = function(data){
		this.data = data ;
		this.next = null ;
	};

	Node.prototype.setNext = function (node) {
		this.next = node ;
	};

	Node.prototype.getNext = function(){
		return this.next;
	};

	var LinkedList = function(){
			this.length = 0 ;
			this.head = null ;
	};

	LinkedList.prototype.show = function(){
		var str = [];
		var temp = this.head ;
		if(!this.head)return '';
		while(temp.getNext()){
			str.push(JSON.stringify(temp.data || {} ));
			temp = temp.getNext();
		}
		str.push(JSON.stringify(temp.data || {} ));
		var result = str.join(' -> ');
		//console.log(result);
		return result;
	};

	LinkedList.prototype.showLength = function(){
		console.log(this.length);
		return 	this.length;
	};

	LinkedList.prototype.insertAtHead = function(node){
		this.length++;
		if(!this.head){
			this.head = node;
			return;
		}else{
			var temp = this.head ;
			this.head = node ;
			this.head.setNext(temp);
		}
	};

	LinkedList.prototype.insertAtTail = function(node){
		this.length++;
		if(!this.head){
			this.head = node;
			return ;
		}else{
			var temp = this.head;
			while(temp.getNext()){
				temp = temp.getNext();
			}
			node.setNext(null);
			temp.setNext(node);
		}
	};

	LinkedList.prototype.insertAtPosition = function(node , position){
		if(position <= 1 ){
			this.insertAtHead(node);
			return;
		}
		if(position > this.length){
			this.insertAtTail(node);
			return;
		}
		else{
			var pos = 1 , temp = this.head , prev ;
			while(temp.getNext()){
				prev = temp;
				temp = temp.getNext();
				pos++;
				if(pos === position){
					this.length++;
					prev.setNext(node);
					node.setNext(temp);
					break;
				}
			}
		}
	};

	LinkedList.prototype.deleteAtHead = function(){
		if(this.head){
			if(this.head.getNext()){
				this.head = this.head.getNext();
				this.length--;
			}
		}
	};

	LinkedList.prototype.deleteAtTail = function(){
		if(this.head){
			var temp = this.head , prev ;
			while(temp.getNext()){
				prev = temp;
				temp = temp.getNext();
			}
			prev.setNext(null);
			this.length--;
		}
	};


	LinkedList.prototype.deleteAtPosition = function(position){
		if(position <= 0 )
			position = 1 ;
		if(position > this.length )
			position = this.length;
		if(position === 1 ){
			this.deleteAtHead();
			return;
		}else if(position === this.length){
			this.deleteAtTail();
			return;
		}else{
			var pos = 1 , temp = this.head , prev ;
			while(temp.getNext()){
				prev = temp ;
				temp = temp.getNext();
				pos++;
				if(pos === position){
					prev.setNext(temp.getNext());
					this.length--;
					break;
				}
			}
		}
	};

	LinkedList.prototype.getDataAtPosition = function(position){
		if(position <= 1 ) {
			return this.head;
		}
		if(position > this.length ) position = this.length;
		var pos = 2 , temp = this.head ;
		temp = temp.getNext();
		while(true){
			if(pos === position){
				return temp.data;
			}
			pos++;
			temp = temp.getNext();
		}
	};

	LinkedList.prototype.findPositionByData = function(data){
		var temp = this.head;
		for(var i = 1 ; i <= this.length ; i++){
			if(temp.data === data )return i ;
			temp = temp.getNext();
		}
		return -1;
	};

	return {
		LinkedList : LinkedList ,
		Node : Node
	};

})();
