import { LinkedList } from "./linkedList";
const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtBeginning(5);
list.print(); // 5 -> 10 -> 20 -> null

console.log(list.search(10)); // true
list.delete(10);
list.print(); // 5 -> 20 -> null
