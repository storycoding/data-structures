var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // works like push
    // adds a value to the back of the queue using length + 1 as index?
  };

  someInstance.dequeue = function() {
    // works like unshift
    //removes a value from the front of the queue (index 0)
  };

  someInstance.size = function() {
    //counts the number of values in the queue
  };

  return someInstance;
};
