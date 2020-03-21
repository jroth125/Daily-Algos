class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, min=-Infinity, max=Infinity) {
    if (tree.value >= min && tree.value < max) {
        let left, right;
        if (tree.right) {
            right = validateBst(tree.right, tree.value, max)
        } else right = true
        if (tree.left) {
            left = validateBst(tree.left, min, tree.value)
        } else left = true
        return left && right
    } else return false
}

// function validateBst(
//   tree,
//   constraints = { moreThan: -Infinity, lessThan: Infinity }
// ) {
//   if (!tree.left && !tree.right) {
//     if (tree.value < constraints.lessThan && tree.value >= constraints.moreThan)
//       return true;
//     else return false;
//   }

//   let left, right;
//   if (tree.value >= constraints.lessThan && tree.value < constraints.moreThan) return false
//   if (tree.left) {
//     left = validateBst(tree.left, {
//       moreThan: constraints.moreThan,
//       lessThan: this.value,
//     });
//   }
//   if (tree.right) {
//     right = validateBst(tree.right, {
//       moreThan: this.value,
//       lessThan: constraints.lessThan,
//     });
//   }

//   return left && right;
// }





// This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

//   function validateBst(tree) {
//     // Write your code here.
//       let right = true, left = true
//       if (tree.left) {
//           if (tree.value > tree.left.value) {
//               left = validateBst(tree.left)
//           } else {
//               left = false
//           }
//       }

//       if (tree.right) {
//           if (tree.value <= tree.right.value) {
//               right = validateBst(tree.right)
//           } else {
//               right = false
//           }
//       }
//       return left && right
//   }
