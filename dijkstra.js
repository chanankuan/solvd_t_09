export function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = [[start, 0]];

  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (priorityQueue.length > 0) {
    priorityQueue.sort((a, b) => a[1] - b[1]); // sort by distance
    const [current, dist] = priorityQueue.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    for (let neighbor in graph[current]) {
      let newDist = dist + graph[current][neighbor];
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        priorityQueue.push([neighbor, newDist]);
      }
    }
  }

  return distances;
}
