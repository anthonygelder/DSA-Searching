// 1. How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
// [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// [3, 5, 6, 8]
// [6, 8]
// [8]
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.

//  [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//  [14, 15, 17, 18]
//  [14]
//  []
//  []

// function binarySearch2(array, value, start, end) {
//     console.log(array.slice(start,end))
//     var start = start === undefined ? 0 : start;
//     var end = end === undefined ? array.length : end;
//     console.log(start, 'start')
//     console.log(end, 'end')

//     if (start > end) {
//         return -1;
//     }

//     const index = Math.floor((start + end) / 2);
//     const item = array[index];

//     // console.log('item', item);
//     if (item == value) {
//         return index;
//     }
//     else if (item < value) {
//         return binarySearch2(array, value, index + 1, end);
//     }
//     else if (item > value) {
//         return binarySearch2(array, value, start, index - 1);
//     }
// };

// function binarySearch(array, value, count, start=0, end=array.length) { 
//     // console.log(count)
//     count++
//         console.log(start, 'start')
//     console.log(end, 'end')
//     if (start >= end) {
//         console.log('The target was not found')
//         return -1
//     }; //find the midpoint and the item at the midpoint 
//     let index = Math.floor((start + end) / 2); let item = array[index];
//     console.log(arr[index])
//     //if the middle element is the target them return that location
//     if (item === value) {
//         console.log(`You found the target in ${count} tries.`)
//         return index;
//     }
//     //if the middle element is less than the target then the target lies 
//     //on the right side so eliminate all left side and only 
//     //consider after the middle to the end of the array
//     else if (item < value) {
//         return binarySearch(array, value, count, index + 1, end);
//     }
//     //if the middle element is greater than the target then the 
//     //target is on the left side so the left of the middle 
//     else if (item > value) {
//         return binarySearch(array, value, count, start, index - 1);
//     }
// };

// const biSearch = (arr, target) => {
//     console.log(arr)
//     let count = 0;
//     binarySearch(arr, target, count)
// }


// const arr = [89,30,25,32,72,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]

// // const linearSearch = (arr, target) => {
// //     for(let i = 0; i < arr.length; i++) {
// //         if (arr[i] === target) {
// //             console.log(`You found the target in ${i + 1} tries`)
// //             return;
// //         } 
// //     }
// //     console.log('Your target was not found')
// //     return;
// // }

// // biSearch(arr.sort(function(a, b){return a - b}), 99)

// const arr2 = [
//     {100: [
//         'book1',
//         'book2',
//         'book3',
//         'book4',
//         'book5',
//     ]},
//     {200: [
//         'book1',
//         'book2',
//         'book3',
//         'book4',
//         'book5',
//     ]},
//     {300: [
//         'book1',
//         'book2',
//         'book3',
//         'book4',
//         'book5',
//     ]},
//     {400: [
//         'book1',
//         'book2',
//         'book3',
//         'book4',
//         'book5',
//     ]}
// ]



// const bookFind = (library, book, num) => {
//     library.map(shelf => {
//         let bookShelf = Object.keys(shelf)
//         if (bookShelf[0] == num) {
//                 let shelfLength = Object.values(shelf)[0].length
//                 for (let i = 0; i < shelfLength; i++) {
//                     // console.log(Object.values(shelf)[0][i])
//                     if (Object.values(shelf)[0][i] == book) {
//                         console.log('your book is found')
//                         return book;
//                     } else {
//                         console.log('your book not is found')
//                         return;
//                     }
//                 }
//         }  
//     })
//     return -1
// }


// bookFind(arr2, 'book1', 100)


// 14 15 19 25 27 89 91 90 79 35

//         8 
//     7       10
//   5   6    9  11

//   8 7 5 6 10 9 11

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }

        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
            /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */
            else {
                this.left.insert(key, value);
            }
        }
        // Similarly, if the new key is greater than the node's key 
          // then you do the same thing, but on the right-hand side 
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }
    find(key) {
        // If the item is found at the root then return that value
        if (this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        /* If the item you are looking for is greater than the root 
           then follow the right child.
           If there is an existing right child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('Key Error');
        }
    }
    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            /* If the node only has a left child, 
               then you replace the node with its left child */
            else if (this.left) {
                this._replaceWith(this.left);
            }
            /* And similarly if the node only has a right child 
               then you replace it with its right child */
            else if (this.right) {
                this._replaceWith(this.right);
            }
            /* If the node has no children then
               simply remove it and any references to it 
               by calling "this._replaceWith(null)" */
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    dsfPreOrder(){
        // Pre-order
        console.log(this.key);
        if (this.left) {
            this.left.dsfPreOrder();
        }
        if (this.right) {
            this.right.dsfPreOrder();
        }
    }

    dsfTrekOrder(){
        // Pre-order
        console.log(this.key);
        if (this.right) {
            this.right.dsfTrekOrder();
        }
        if (this.left) {
            this.left.dsfTrekOrder();
        }
    }

    dsfInOrder(){
        if (this.left) {
            this.left.dsfInOrder();
        }
        console.log(this.key);
        if (this.right) {
            this.right.dsfInOrder();
        }
    }

    dsfPostOrder() {
        if (this.left) {
            this.left.dsfPostOrder();
        }
        if (this.right) {
            this.right.dsfPostOrder();
        }
        console.log(this.key);
    }
    bfs(values) { 
        values = values || []; const queue = [this];
    
        while (queue.length) {
            var node = queue.shift();
            values.push(node.value);
        
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return values;
    }
}

const BST = new BinarySearchTree();

// const arr = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22]
const arr = [5,3,6,1,4,8]

for (let i = 0; i < arr.length; i++) {
    BST.insert(arr[i])
}

console.log(BST)

console.log(BST.bfs())




