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
			if (this.parent == null) {
			return;
		} else {
			const parent = this.parent
			const parentOfParent = parent.parent;
			this.parent = parentOfParent;
			parent.parent = this;

			if (parent.left && parent.left !== this) {
				parent.left.parent = this;
			}

			if (parent.right && parent.right !== this) {
				parent.right.parent = this;
			}

			
		}
	
	}
}

module.exports = Node;
