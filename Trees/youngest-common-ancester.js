//O(n) time with O(n) space as well - solved using a Map object (storing the nodes from one
// into this)

function youngestCommonAncestor(topAncestor, descendentOne, descendentTwo) {
  const ancestorsOne = new Map();
  let currAncestor = descendentOne;

  while (currAncestor !== topAncestor) {
    ancestorsOne.set(currAncestor, true);
    currAncestor = currAncestor.ancestor;
  }

  let currAncestor2 = descendentTwo;
  while (currAncestor2 !== topAncestor) {
    if (ancestorsOne.get(currAncestor2)) return currAncestor2;
    currAncestor2 = currAncestor2.ancestor;
  }

  return topAncestor;
}


function getYoungestCommonAncestor(top, descA, descB) {
    let currAncestorForA = descA
    let AlevelFromSelf = 1

    while (currAncestorForA !== top) {
        ++AlevelFromSelf
        currAncestorForA = currAncestorForA.ancestor
    }

    let currAncestorForB = descB
    let BlevelFromSelf = 1

    while (currAncestorForB !== top) {
        ++BlevelFromSelf
        currAncestorForB = currAncestorForB.ancestor
    }

    currAncestorForA = descA
    currAncestorForB = descB
    while (currAncestorForB !== top && currAncestorForA !== top) {
        if (AlevelFromSelf > BlevelFromSelf) {
            currAncestorForA = currAncestorForA.ancestor
            --AlevelFromSelf
        } else if (BlevelFromSelf > AlevelFromSelf) {
            currAncestorForB = currAncestorForB.ancestor
            --BlevelFromSelf
        } else {
            if (currAncestorForB === currAncestorForA) return currAncestorForA
            currAncestorForA = currAncestorForA.ancestor
            currAncestorForB = currAncestorForB.ancestor
            AlevelFromSelf-- ; BlevelFromSelf--
        }
    }
    return top
}