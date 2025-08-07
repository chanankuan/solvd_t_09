export function shortestPathBFS(graph, start, end) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === end) return path;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of graph[node]) {
        queue.push([...path, neighbor]);
      }
    }
  }

  return null;
}
