class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a new vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an undirected edge between two vertices
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) this.addVertex(v1);
    if (!this.adjacencyList[v2]) this.addVertex(v2);

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // Depth-First Search (DFS) - Recursive
  dfs(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfsHelper(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    })(start);

    return result;
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = { [start]: true };

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
