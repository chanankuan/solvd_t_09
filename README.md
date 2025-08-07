# Documentation

## Stack Class

### Overview

The `Stack` class implements a **Last-In-First-Out (LIFO)** data structure using a private array.  
It provides methods to push, pop, and peek elements, as well as to check whether the stack is empty.  
Encapsulation is maintained by using **private fields** (denoted by `#`), so the internal list cannot be accessed directly from outside the class.

---

### Class Definition

```js
export class Stack {
  #list = [];

  push(element) { ... }
  pop() { ... }
  peek() { ... }
  empty() { ... }
}
```

### Private Properties

#### `#list`

- **Type:** `Array`
- **Access:** Private
- **Description:** Stores the elements of the stack internally.  
  Only accessible within the class, ensuring the stack can only be modified through defined methods.

---

### Public Methods

#### `push(element)`

- **Parameters:**
  - `element` _(any)_ — The value to be added to the top of the stack.
- **Returns:** `void`
- **Description:**  
  Adds the given `element` to the top of the stack.
- **Example:**
  ```js
  stack.push(10); // Adds 10 to the stack
  ```

#### `pop()`

- **Returns:**
  - The top element of the stack, or `null` if the stack is empty.
- **Description:**  
  Removes and returns the top element from the stack.
- **Example:**
  ```js
  stack.push(5);
  console.log(stack.pop()); // 5
  ```

#### `peek()`

- **Returns:**
  - The top element of the stack, or `null` if the stack is empty.
- **Description:**  
  Returns the top element without removing it from the stack.
- **Example:**
  ```js
  stack.push(7);
  console.log(stack.peek()); // 7 (still in stack)
  ```

#### `empty()`

- **Returns:**
  - `true` if the stack is empty, otherwise `false`.
- **Description:**  
  Checks if the stack contains no elements.
- **Example:**
  ```js
  console.log(stack.empty()); // true
  ```

### Encapsulation

The stack uses **private fields** (`#list`) to prevent direct modification from outside the class.  
All interactions happen through **public methods**, enforcing controlled access to stack data.

---

### Example Usage

```js
const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
console.log(stack.pop()); // 2
console.log(stack.empty()); // false
```

## Queue Class

### Overview

The `Queue` class implements a **First-In-First-Out (FIFO)** data structure using a private array.  
It provides methods to enqueue (add) elements, dequeue (remove) elements, peek at the front element, and check if the queue is empty.  
Encapsulation is maintained by using **private fields** (`#list`), so the internal list cannot be accessed or modified directly from outside the class.

---

### Private Properties

#### `#list`

- **Type:** `Array`
- **Access:** Private
- **Description:** Stores the elements of the queue internally.  
  Only accessible within the class to ensure controlled modification via methods.

---

### Public Methods

#### `enqueue(element)`

- **Parameters:**
  - `element` _(any)_ — The value to be added to the back of the queue.
- **Returns:** `void`
- **Description:**  
  Adds the given `element` to the end (back) of the queue.
- **Example:**
  ```js
  queue.enqueue(10); // Adds 10 to the queue
  ```

#### `dequeue()`

- **Returns:**
  - The element at the front of the queue, or `null` if the queue is empty.
- **Description:**  
  Removes and returns the element at the front of the queue.
- **Example:**
  ```js
  queue.enqueue(5);
  console.log(queue.dequeue()); // 5
  ```

#### `peek()`

- **Returns:**
  - The element at the front of the queue, or `null` if the queue is empty.
- **Description:**  
  Returns the front element without removing it from the queue.
- **Example:**
  ```js
  queue.enqueue(7);
  console.log(queue.peek()); // 7 (still in queue)
  ```

#### `empty()`

- **Returns:**
  - `true` if the queue is empty, otherwise `false`.
- **Description:**  
  Checks if the queue contains no elements.
- **Example:**
  ```js
  console.log(queue.empty()); // true
  ```

### Encapsulation

The queue uses **private fields** (`#list`) to prevent direct modification from outside the class.  
All interactions happen through **public methods**, enforcing controlled access to queue data.

### Example Usage

```js
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // 1
console.log(queue.dequeue()); // 1
console.log(queue.empty()); // false
```

## LinkedList Class

### Overview

The `LinkedList` class implements a **singly linked list** data structure, where each node contains a value and a reference (`next`) to the next node in the list.  
It supports insertion at the beginning and end, deletion by value, searching for a value, and printing the list.  
The implementation uses a helper `Node` class to store the individual elements.

### Node Class

#### `constructor(value)`

- **Parameters:**
  - `value` _(any)_ — The data to store in the node.
- **Description:**  
  Creates a new node with the given value and sets its `next` pointer to `null`.

### LinkedList Methods

#### `insertAtBeginning(value)`

- **Parameters:**
  - `value` _(any)_ — The data to insert.
- **Returns:** `void`
- **Description:**  
  Inserts a new node at the **start** of the linked list.
- **Example:**
  ```js
  list.insertAtBeginning(10);
  ```

#### `insertAtEnd(value)`

- **Parameters:**
  - `value` _(any)_ — The data to insert.
- **Returns:** `void`
- **Description:**  
  Inserts a new node at the **end** of the linked list.
- **Example:**
  ```js
  list.insertAtEnd(20);
  ```

#### `delete(value)`

- **Parameters:**
  - `value` _(any)_ — The value of the node to remove.
- **Returns:** `void`
- **Description:**  
  Deletes the first node that matches the given value.
- **Example:**
  ```js
  list.delete(10);
  ```

#### `search(value)`

- **Parameters:**
  - `value` _(any)_ — The value to search for.
- **Returns:** `boolean` — `true` if found, otherwise `false`.
- **Description:**  
  Searches for a node containing the given value.
- **Example:**
  ```js
  list.search(20); // true or false
  ```

#### `print()`

- **Returns:** `void`
- **Description:**  
  Prints the linked list in a readable format to the console.
- **Example:**
  ```js
  list.print(); // 10 -> 20 -> null
  ```

### Encapsulation

The linked list's structure is **partially exposed** (via the `head` property), but nodes are managed only through methods.  
Direct node manipulation is discouraged to maintain data consistency.

### Example Usage

```js
const list = new LinkedList();

list.insertAtBeginning(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.print(); // 10 -> 20 -> 30 -> null
console.log(list.search(20)); // true
list.delete(20);
list.print(); // 10 -> 30 -> null
```

## BinaryTree Class

### Overview

The `BinaryTree` class implements a **binary search tree (BST)** data structure.  
Each node stores a value and references to its left and right child nodes.  
The BST maintains sorted order: left subtree values are less than the node's value, right subtree values are greater or equal.

---

### TreeNode Class

#### `constructor(value)`

- **Parameters:**
  - `value` _(any)_ — The data to store in the node.
- **Description:**  
  Creates a new tree node with the given value.  
  The `left` and `right` child references are initialized to `null`.

---

### BinaryTree Methods

#### `insert(value)`

- **Parameters:**
  - `value` _(any)_ — The value to insert into the tree.
- **Returns:** `void`
- **Description:**  
  Inserts a new node with the specified value into the BST, maintaining its sorted property.
- **Example:**

#### `search(value)`

- **Parameters:**
  - `value` _(any)_ — The value to find in the tree.
- **Returns:** `boolean` — `true` if the value exists, otherwise `false`.
- **Description:**  
  Searches the BST for the specified value using the binary search property.
- **Example:**
  ```js
  tree.search(10); // true or false
  ```

### Traversal Methods

#### `inOrder(node = this.root)`

- **Parameters:**
  - `node` _(TreeNode | null)_ — The current node for traversal (default is the root).
- **Returns:** `void`
- **Description:**  
  Performs an **in-order traversal** (Left, Root, Right), printing node values in ascending order.
- **Example:**
  ```js
  tree.inOrder();
  ```

#### `preOrder(node = this.root)`

- **Parameters:**
  - `node` _(TreeNode | null)_ — The current node for traversal (default is the root).
- **Returns:** `void`
- **Description:**  
  Performs a **pre-order traversal** (Root, Left, Right), printing node values.
- **Example:**
  ```js
  tree.preOrder();
  ```

#### `postOrder(node = this.root)`

- **Parameters:**
  - `node` _(TreeNode | null)_ — The current node for traversal (default is the root).
- **Returns:** `void`
- **Description:**  
  Performs a **post-order traversal** (Left, Right, Root), printing node values.
- **Example:**
  ```js
  tree.postOrder();
  ```

### Encapsulation

The `BinaryTree` class exposes the `root` property publicly, allowing external code to traverse or manipulate the tree starting from the root node if needed.  
However, the tree operations such as insertion, searching, and traversals encapsulate the internal node management, keeping node connections and tree structure details hidden from the user.  
This separation ensures the integrity of the binary search tree is maintained and prevents external code from corrupting the tree structure unintentionally.

---

### Example Usage

```js
const tree = new BinaryTree();

tree.insert(15);
tree.insert(10);
tree.insert(20);

console.log(tree.search(10)); // true
console.log(tree.search(5)); // false

tree.inOrder(); // 10 15 20
tree.preOrder(); // 15 10 20
tree.postOrder(); // 10 20 15
```

## Graph Class

Represents an undirected graph using an adjacency list.

---

### Properties

#### `adjacencyList`

- **Type:** `Object`
- **Description:**  
  Stores each vertex as a key with an array of adjacent vertices as its value.

---

### Methods

#### `addVertex(vertex)`

- **Parameters:**
  - `vertex` _(string)_ — The name or identifier of the vertex to add.
- **Returns:** `void`
- **Description:**  
  Adds a new vertex to the graph if it does not already exist.

#### `addEdge(v1, v2)`

- **Parameters:**
  - `v1` _(string)_ — The first vertex.
  - `v2` _(string)_ — The second vertex.
- **Returns:** `void`
- **Description:**  
  Adds an undirected edge between vertices `v1` and `v2`. If either vertex doesn't exist, it will be added first.

#### `dfs(start)`

- **Parameters:**
  - `start` _(string)_ — The starting vertex for the depth-first search.
- **Returns:** `Array<string>` — The order of vertices visited during DFS.
- **Description:**  
  Performs a **Depth-First Search** recursively starting from the `start` vertex, exploring as far as possible along each branch before backtracking.

#### `bfs(start)`

- **Parameters:**
  - `start` _(string)_ — The starting vertex for the breadth-first search.
- **Returns:** `Array<string>` — The order of vertices visited during BFS.
- **Description:**  
  Performs a **Breadth-First Search** starting from the `start` vertex, exploring all neighbors at the present depth prior to moving on to nodes at the next depth level.

---

### Encapsulation

The graph uses an adjacency list stored in a plain object to keep track of vertices and edges.  
Methods control how vertices and edges are added and traversed, preventing direct external modification of the internal data structure.

---

### Example Usage

```js
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log(graph.dfs("A")); // ['A', 'B', 'D', 'C']
console.log(graph.bfs("A")); // ['A', 'B', 'C', 'D']
```
