class Node {
	constructor (data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}

	show () {
		return this.data;
	}
}

class BST {
	constructor () {
		this.root = null;
	}

	insert (data) {
		const node = new Node(data, null, null);
		if (this.root == null) {
			this.root = node;
		}
		else {
			let current = this.root;
			let parent;
			while (true) {
				parent = current;
				if (data < current.data) {
					current = current.left;
					if (current == null) {
						parent.left = node;
						break;
					}
				}
				else {
					current = current.right;
					if (current == null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	depth () {
		return this._depth(this.root);
	}

	_depth (node) {
		if(null === node) {
			return 0;
		} else {
			let leftDepth = this._depth(node.left);
			let rightDepth = this._depth(node.right);
			return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
		}
	}

	//调用两次递归遍历二叉树
	preOrder (node) {
		this._preOrder(this.root);
	}

	_preOrder (node) {
		if (!(node == null)) {
			console.log(node.show());
			this._preOrder(node.left);
			this._preOrder(node.right);
		}
	}

	//调用两次递归遍历二叉树
	inOrder (node) {
		this._inOrder(this.root);
	}
	_inOrder(node) {
		if (!(node == null)) {
			this._inOrder(node.left);
			console.log(node.show());
			this._inOrder(node.right);
		}
	}

	//调用两次递归遍历二叉树
	postOrder (node) {
		this._postOrder(this.root);
	}
	_postOrder (node) {
		if (!(node == null)) {
			this._postOrder(node.left);
			this._postOrder(node.right);
			console.log(node.show());
		}
	}
}

let tree = new BST();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);


console.log('depth--------');
console.log(tree.depth());

console.log('inOrder--------');
tree.inOrder();
console.log('preOrder--------');
tree.preOrder();
console.log('postOrder--------');
tree.postOrder();