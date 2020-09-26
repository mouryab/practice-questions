// Inorder traversal
// First, visit all the nodes in the left subtree
// Then the root node
// Visit all the nodes in the right subtree
// inorder(root->left)
// display(root->data)
// inorder(root->right)


// Preorder traversal
// Visit root node
// Visit all the nodes in the left subtree
// Visit all the nodes in the right subtree
// display(root->data)
// preorder(root->left)
// preorder(root->right)

// Postorder traversal
// Visit all the nodes in the left subtree
// Visit all the nodes in the right subtree
// Visit the root node
// postorder(root->left)
// postorder(root->right)
// display(root->data)


// Tree traversal in Java

class Node {
	constructor(key, left = null, right = null) {
	   this.item = key;
	   this.left = left;
	   this.right = right;
	}
}

class BinaryTree {
  // Root of Binary Tree
  constructor(root = null) {
  	this.root = root;
  }

 postorder(node) {
	  if (node == null) return;
	  // Traverse left
	  postorder(node.left);
	  // Traverse right
	  postorder(node.right);
	  
	  // Traverse root
   console.dir(node.item + "->");
 }

  inorder(node) {
	  if (node === null) return;
	  // Traverse left
	  inorder(node.left);
	  // Traverse root
	  console.dir(node.item + "->");
	  // Traverse right
	  inorder(node.right);
  }

  preorder(node) {
  if (node === null) return;

	  // Traverse root
	  console.dir(node.item + "->");
	  // Traverse left
	  preorder(node.left);
	  // Traverse right
	  preorder(node.right);
  }
}


(function() {
  const tree = new BinaryTree();
  tree.root = new Node(1);
  tree.root.left = new Node(12);
  tree.root.right = new Node(9);
  tree.root.left.left = new Node(5);
  tree.root.left.right = new Node(6);

  console.dir("Inorder traversal");
  tree.inorder(tree.root);

  console.dir("\nPreorder traversal");
  tree.preorder(tree.root);

  console.dir("\nPostorder traversal");
  tree.postorder(tree.root);
})