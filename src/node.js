class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null
	}

	appendChild(node) {
		if (!this.left){
			this.left = node;
			node.parent = this;
		}else if (!this.right){
			this.right =node;
			node.parent = this;
		}else{
			return;
			}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
			node.parent = null;
		} else if (this.right == node) {
			this.right = null;
			node.parent = null;
		} else {
			throw 'blablabla';
		}

	}

	remove() {
		if (this.parent == null) {
			return;
		} else {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (this.parent) {
			const parent = this.parent;
			const left = this.left;
			const right = this.right;
			const parentOfParent = this.parent.parent;
			
			this.parent = parentOfParent;
			parent.parent = this;
			
			if (parent.right === this) {
			this.right = parent;
			this.left = parent.left;
			if (this.left)
			this.left.parent = this;
			}
			
			if (parent.left === this) {
			this.left = parent;
			this.right = parent.right;
			if (this.right)
			this.right.parent = this;
			}
			
			parent.left = left;
			parent.right = right;
			
			if (left)
			left.parent = parent;
			
			if (right)
			right.parent = parent;
			
			if (parentOfParent && parentOfParent.left == parent) {
			parentOfParent.left = this;
			}
			
			if (parentOfParent && parentOfParent.right == parent) {
			parentOfParent.right = this;
			}
			
		}
	
	}
}

module.exports = Node;
