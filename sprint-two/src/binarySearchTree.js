var BinarySearchTree = function(value) {
  
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  tree.insert = BSTFunctions.insert;
  tree.contains = BSTFunctions.contains;
  tree.depthFirstLog = BSTFunctions.depthFirstLog;
  
  return tree;
};  

var BSTFunctions = {};

BSTFunctions.insert = function(insertee) {
  if (this.value === insertee) {

    return;
  }

  if ( insertee < this.value ) {
    if (this.left === null) {
      this.left = BinarySearchTree(insertee);

    } else { 
      this.left.insert(insertee);
    }
  }

  if ( insertee > this.value ) {
    if (this.right === null) {
      this.right = BinarySearchTree(insertee);

    } else {
      this.right.insert(insertee);
    }
  }
};

BSTFunctions.contains = function(containee) {
  if (this.value === containee) {

    return true;
  }

  if ( containee < this.value ) {
    if (this.left === null) {

      return false;

    } else { 
      var doesContain = this.left.contains(containee);
      if (doesContain === true) {

        return true;
      }
    }
  }

  if ( containee > this.value ) {
    if (this.right === null) {

      return false;

    } else {
      var doesContain = this.right.contains(containee);
      if (doesContain === true) {

        return true;
      }
    }
  }

  return false;
};

BSTFunctions.depthFirstLog = function(iteratee) {
  // runs iteratee on every value of our binary tree
  iteratee(this.value);

  // check if there are children
  if (this.left !== null) {
    this.left.depthFirstLog(iteratee);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(iteratee);

  } else {
    return;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(log n) logarithmic
 * contains: O(log n) logarithmic
 * depthFirstLog: O(log n) logarithmic
 */