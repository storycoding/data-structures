//PseudoClasses
var Graph = function() {
  this.edges = [];
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  nodeList = this.nodes;
  edgeList = this.edges;

  for (var i = 0; i < edgeList.length; i++) {
    if (edgeList[i].includes(node)) {
      edgeList.splice(i, 1);
    }
  }

  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i] === node) {
      nodeList.splice(i, 1);
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeList = this.edges;
  //loops through the edges to find a matching fromNode
  for (var i = 0; i < edgeList.length; i++) {
    if (edgeList[i][0] === fromNode) {
      //if fromNode is found, check its paired node against toNode
      if (edgeList[i][1] === toNode) {
        return true;
      }
      //checks the same way as above but reversing the node order
    } else if (edgeList[i][0] === toNode) {
      if (edgeList[i][1] === fromNode) {
        return true;
      }
    }
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var edgeList = this.edges;
  //loops through the edges to find a matching fromNode
  for (var i = 0; i < edgeList.length; i++) {
    if (edgeList[i][0] === fromNode) {
      //if fromNode is found, check its paired node against toNode
      if (edgeList[i][1] === toNode) {
        edgeList.splice(i, 1);
      }
      //checks the same way as above but reversing the node order
    } else if (edgeList[i][0] === toNode) {
      if (edgeList[i][1] === fromNode) {
        edgeList.splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeList = this.nodes;
  for (var i = 0; i < nodeList.length; i++) {
    cb(nodeList[i]);
  }
};


/*

//PseudoClasses
var Graph = function() {
  this.edges = [];
  this.nodes = [];
};

// the nodes are just values, not objects
var Node = function(value) {
  this.value = value;
};

var Edge = function(fromNode, toNode) {
  this.fromNode = fromNode;
  this.toNode = toNode;
};


//Functions

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) { // it used to have node as input
  this.nodes[Node] = new Node(value);  
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
  
  this.edges.push(new Edge(fromNode, toNode));

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


