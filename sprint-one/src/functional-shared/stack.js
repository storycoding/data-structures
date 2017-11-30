var Stack = function() {
  var storage = { length: 0 };

  storage.push = stackMethods.push;
  storage.pop = stackMethods.pop;
  storage.size = stackMethods.size;

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  //adds to the top of the stack
  this.length += 1;
  this[this.length - 1] = value;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  
  var popped = this[this.length - 1];

  delete this[this.length];

  this.length--;
  
  return popped;
};

stackMethods.size = function() {
  return this.length;
};
