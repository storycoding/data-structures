var Queue = function() {
  var storage = Object.create(queueMethods);
  
  storage.length = 0;

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  
  this[this.length + 1] = undefined;
  this.length++;

  var length = this.length;

  while (length > 0) {
    this[length] = this[length - 1];
    length--;
  }

  this[0] = value;
};

queueMethods.dequeue = function() {
  
  if (this.length === 0) {
    return undefined;
  }

  var dequeued = this[this.length - 1];
  
  delete this[this.length];
  
  this.length--;

  return dequeued;
};

queueMethods.size = function() {
  return this.length;  
};