export function isBST(node, min = -Infinity, max = Infinity) {
  if (!node) return true;

  if (node.value <= min || node.value >= max) return false;

  return (
    isBST(node.left, min, node.value) && isBST(node.right, node.value, max)
  );
}
