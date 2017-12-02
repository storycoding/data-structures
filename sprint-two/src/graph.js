

// Instantiate a new graph
var Graph = function() {
  //this.value = value;
  this.edges = [];
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) { // it used to have node as input
  this.nodes[node] = new Graph;  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  if (this.nodes[node] !== undefined) {
    return true;
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  for (var i = 0; i < fromNode.edges.length; i++) {
    
    if (fromNode.edges[i] === toNode) {
      return true;
    }
   
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  fromNode.edges.push(toNode);
  toNode.edges.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var i = 0; i < fromNode.edges.length; i++) {
    
    if (fromNode.edges[i] === toNode) {
      fromNode.edges.splice(i, 1);

      for (var i = 0; i < toNode.edges.length; i++) {

        if (toNode.edges[i] === fromNode) {
          toNode.edges.splice(i, 1); 
        }    

      }
   
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var node in this.nodes) {
    cb(this.nodes[node]);
  }

};



/*

var garphield = new Graph();

garphield = {
  //prototypal funcs
  addNode(node),
  contains(node),
  removeNode(node),
  hasEdge(fromNode, toNode),
  addEdge(fromNode, toNode),
  removeEdge(fromNode, toNode),
  forEachNode(callback)
}

*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


