var Stack = function() {
  var someInstance = {};

  var storage = { length: 0 };

  someInstance.push = function(value) {
    storage.length += 1;
    storage[storage.length - 1] = value;
  };

  someInstance.pop = function() {
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
