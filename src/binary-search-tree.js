const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootEl = null;
  }
  root() {
    return this.rootEl;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    const newNode = new Node(data);
    this.rootEl = addElem(this.rootEl, newNode);
    function addElem(rootElem, newNode) {
      if (!rootElem) {
        return newNode;
      }
      if (newNode.data === rootElem.data) {
        return rootElem;
      }
      if (newNode.data < rootElem.data) {
        rootElem.left = addElem(rootElem.left, newNode);
      } else {
        rootElem.right = addElem(rootElem.right, newNode);
      }
      // console.debug(rootElem)
      return rootElem;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {
      // console.debug(this.rootEl, data)
    return hasElem(this.rootEl, data);

    function hasElem(rootElem, data) {
      if (!rootElem) {
        return false;
      }
      if (data === rootElem.data) {
        return true;
      }
      if (data < rootElem.data) {
        return hasElem(rootElem.left, data);
      } else {
        return hasElem(rootElem.right, data);
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    }
  }

  find(data) {
    return findElem(this.rootEl, data);

    function findElem(rootElem, data) {
      if (!rootElem) {
        return null;
      }
      if (data === rootElem.data) {
        return rootElem;
      }
      if (data < rootElem.data) {
        return findElem(rootElem.left, data);
      } else {
        return findElem(rootElem.right, data);
      }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    }
  }

  remove(data) {
    this.rootEl = removeElem(this.rootEl, data);

    function removeElem(rootElem, data) {
    // console.debug('elem to del:', rootElem, data)
      if (!rootElem) {
        return null;
      }
      if (data < rootElem.data) {
        rootElem.left = removeElem(rootElem.left, data);
        return rootElem;
      } else if (data > rootElem.data) {
        rootElem.right = removeElem(rootElem.right, data);
        return rootElem;
      } else {
        if (!rootElem.left && !rootElem.right) {
          return null;
        }
        if (!rootElem.left) {
          rootElem = rootElem.right;
          return rootElem;
        }
        if (!rootElem.right) {
          rootElem = rootElem.left;
          return rootElem;
        }
        if (rootElem.left && rootElem.right) {
          let rightMin = rootElem.right;
          while (rightMin.left) {
            rightMin = rightMin.left;
          }
          rootElem.data = rightMin.data;
          rootElem.right = removeElem(rootElem.right, rightMin.data);
          return rootElem;
        }
      }
      return rootElem;
    }
    // console.debug(this.rootEl)
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    return findMin(this.rootEl);

    function findMin(rootElem) {
      if (rootElem.left) {
        return findMin(rootElem.left);
      } else {
        return rootElem.data;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    return findMax(this.rootEl);

    function findMax(rootElem) {
      if (rootElem.right) {
        return findMax(rootElem.right);
      } else {
        return rootElem.data;
      }
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};