var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);  
  var pair = [k, v];

  if (bucket === undefined) {
    bucket = [];
    bucket.push(pair);

    this._storage.set(index, bucket);
    return;
  }  
  for (var i = 0; i < bucket.length; i++) {

    if (bucket[i][0] === k) {
      bucket[i] = pair;
      this._storage.set(index, bucket);
      return;
    }
  }

  bucket.push(pair);
  this._storage.set(index, bucket);
 
  return;
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }

  return;
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._storage.set(index, bucket);
    }
  }

  return;
};


// friendly note to the test suite team:
//
//   in HashTable.prototype.remove() it is possibly to pass
//   with a non-functional alternative:
//
//    HashTable.prototype.remove = function(k) {
//        var index = getIndexBelowMaxForKey(k, this._limit);
//         return this._storage.set(index, undefined);
//     };

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(c) constant // worst case scenario O(n) linear
 * retrieve: O(c) constant // worst case scenario O(n) linear
 * remove: O(c) constant // worst case scenario O(n) linear
 */