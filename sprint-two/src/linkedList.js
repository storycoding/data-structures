var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    newNode = Node(value);
    
    if (list.tail === null && list.head === null) { //if node is empty
            
      list.head = newNode;
      list.tail = newNode;

    } else if ( list.head === list.tail ) {
      list.head.next = newNode;
      list.tail = newNode;

    } else if ( list.head !== list.tail ) {

      list.tail.next = newNode;
      list.tail = newNode;

    }  

  };



  list.removeHead = function() {

    var removedHead = list.head;

    if (removedHead.next !== null || removedHead.next !== undefined) {
      list.head = removedHead.next;

    } else {
      list.head = null;
      list.tail = null;
    }
    
    return removedHead.value;
  };



  list.contains = function(target) {


    var chainContain = function(target, source) {

      if (source.value === target) {
        return true;  

      } else {
        
        if (list.tail === source) {
          return false;
        }
        
        return list.contains(source.next);
      }

    };
    

    var currentNode = list.head;

    if (currentNode.value === target) {
      return true; 

    } else if ( list.head === list.tail && currentNode.value !== target) {
      return false;

    } else {
      return chainContain(target, list.head.next);
    }


  };
  
  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var newNode = Node('new value');

/*
 * Complexity: What is the time complexity of the above functions?
 */
