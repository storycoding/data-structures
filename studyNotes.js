//PROTOTYPAL - USING Object.prototype
var House = function(color) {
  var obj = Object.create(House.prototype);

  obj.color = color;
  obj.door = 'open';

  return obj; 
};



House.prototype.openDoor = function() {
  this.door = 'open';
  console.log(this.door);
};

House.prototype.closeDoor = function() {
  this.door = 'closed';
  console.log(this.door);
};

var house = new House('prototype red');





//PSEUDOCLASSICAL - uses 'new' keyword
var House = function(color) {
  
  //no need for declaring an object 
  this.color = color;
  this.door = 'open';

  //this - refers to the object created by the 'new' keyword
  //no need to return an object
};



//same as prototypal
House.prototype.openDoor = function() {
  this.door = 'open';
  console.log(this.door);
};

House.prototype.closeDoor = function() {
  this.door = 'closed';
  console.log(this.door);
};

var house = new House('pseudoclassical blue');
// new keyword creates the object and assigns the var house to it





//FUNCTIONAL SHARED - uses separate object for storing / sharing methods
var House = function(color) {
  var obj = {};
  obj.color = color;
  obj.door = open;
  //methods are stored in a separate shared object
  obj.open = houseMethods.open;
  obj.close = houseMethods.close;
  //still need to return original object
  return obj;
  
};
//separate object for houseMethods
var houseMethods = {};

houseMethods.openDoor = function() {
  this.door = 'open';
};

houseMethods.closeDoor = function() {
  this.door = 'closed';
};

var house = House('functional shared green');




//FUNCTIONAL - built out in 



//NODES

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // LinkedList.add('Mark'); // if we were to add the 'Mark' data to the linkedList...
  // constructor() {
  //   this.head   = { data : 'Mark', next : nextNode };
  //   this.length = 1;
  // }
 
  
  add(data) {
    const nodeToAdd = new Node(data);

    let nodeToCheck = this.head;

    if (!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }

    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  }

  get(index) {
    const nodeToCheck = this.head;
    let count = 0;
  
    if (index > this.length) {
      return 'Doesn\'t Exist!';
    }
  
    while (count < index) {
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    return nodeToCheck;
  }


  remove(index) {
    let nodeToCheck = this.head;
    let count = 0;
    let prevNode = null;
    
    if (index > length) {
      return 'Doesn\'t Exist!';
    }
    
    if (index === 0) {
      this.head = nodeToCheck.next;
      this.length--;
      
      return this.head;
    }
    
    while (count < index) {
      prevNode = nodeToCheck;
      nodeToCheck = nodeToCheck.next;
      count++;
    }
    
    prevNode.next = nodeToCheck.next;
    nodeToCheck = null;
    this.length--;
    
    return this.head;
  }  
}
