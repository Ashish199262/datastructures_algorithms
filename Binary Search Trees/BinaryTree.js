class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    //root of a binary search tree
    this.root = null;
  }
  //function to be implemented
  //insert(data)
  //It inserts a new node in a tree with a value data
  insert(data) {
    //Creating a node and initialising with data
    var newNode = new Node(data);
    if (this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(node.left, newNode)
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  //remove(data)
  remove(data) {
    //This function removes a node with a given data
    this.root = this.removeNode(this.root, data);
    console.log("Updated root", this.root);
  }

  removeNode(node, key) {
    //if the root is null then tree is empty
    if (node === null)
      return null;
    else if (key < node.data) {
      node.left - this.removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }
    // if data is similar to the root's data
    // then delete this node  
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      let aux = this.findMinNode(node.right);
      node.data = aux.data;
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  //Helper function
  // finMinNode()
  findMinNode(node) {
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }
  // getRootNode()
  getRootNode() {
    return this.root;
  }
  // inorder(node)
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // preorder(node)
  preorder(node) {
    if (node != null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // postorder(node)
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  getMinNode(node) {
    if (!node) return 0;
    if (node.left) {
      return this.getMinNode(node.left);
    }
    return node.data;

  }
  getMaxNode(node) {
    if (!node) return 0;
    if (node.right) {
      return this.getMaxNode(node.right)
    }
    return node.data;
  }
  getRootNode() {
    return this.root;
  }
  search(node, data) {
    //node's initial value is the node
    if (node === null) {
      return console.log(`Search Result : ${null}`);
    }
    // else if (node.data === data) {
    //   return node;
    // }
    else if (data < node.data) {
      return this.search(node.left, data);
    }
    else if (data > node.data) {
      return this.search(node.right, data);
    }
    else
      return console.log(`Search Result : ${node.data}`);
  }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


// BST.remove(15);
let root = BST.getRootNode();
// console.log(`Root node: ${root.data}`)
BST.inorder(root);

// console.log(`Preorder traversal`);
// BST.preorder(root);

// console.log(`Postorder traversal`);
// BST.postorder(root);

BST.search(root, 27);

console.log(BST.getMaxNode(root));