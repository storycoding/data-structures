var Queue = function() {
  var someInstance = {};

  var storage = {length: 0};

  someInstance.enqueue = function(value) {
    storage[storage.length + 1] = undefined;
    storage.length++;

    var length = storage.length;

    while (length > 0) {
      storage[length] = storage[length - 1];
      length--;
    }
    storage[0] = value;
    
  };

  someInstance.dequeue = function() {
    if (storage.length === 0) {
      return undefined;
    }
    
    var popped = storage[storage.length - 1];
    delete storage[storage.length];
    storage.length--;
    
    return popped;
  };


  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};