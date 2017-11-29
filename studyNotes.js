//PROTOTYPAL - USING Object.prototype
var House = function(color) {
  var obj = Object.create(House.prototype);

  obj.color = color;
  obj.door = 'open';

  return obj; 
};



House.prototype.openDoor = function() {
  this.door = 'open';
  console.log(this.door);
};

House.prototype.closeDoor = function() {
  this.door = 'closed';
  console.log(this.door);
};