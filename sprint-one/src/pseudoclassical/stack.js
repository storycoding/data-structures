var Stack = function() {
  this.length = 0;
};

Stack.prototype.push = function(value) {
  this.length += 1;
  this[this.length - 1] = value;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  
  var popped = this[this.length - 1];

  delete this[this.length];

  this.length--;
  
  return popped;
};

Stack.prototype.size = function() {
  return this.length;
};