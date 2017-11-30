var Stack = function() {

  var storage = Object.create(stackMethods);

  storage.length = 0;

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
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