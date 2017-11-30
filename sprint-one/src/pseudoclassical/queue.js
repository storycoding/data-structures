var Queue = function() {
  this.length = 0;
};

var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  
  this[this.length + 1] = undefined;
  this.length++;

  var length = this.length;

  while (length > 0) {
    this[length] = this[length - 1];
    length--;
  }

  this[0] = value;
};

Queue.prototype.dequeue = function() {
  
  if (this.length === 0) {
    return undefined;
  }

  var dequeued = this[this.length - 1];
  
  delete this[this.length];
  
  this.length--;

  return dequeued;
};

Queue.prototype.size = function() {
  return this.length;  
};