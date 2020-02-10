function youngestCommonAncestor(topAncestor, descendentOne, descendentTwo) {
    const ancestorsOne = new Map
    let currAncestor = descendentOne

    while (currAncestor !== topAncestor) {
        ancestorsOne.set(currAncestor, true)
        currAncestor = currAncestor.ancestor
    }

    let currAncestor2 = descendentTwo
    while (currAncestor2 !== topAncestor) {
        if (ancestorsOne.get(currAncestor2)) return currAncestor2
        currAncestor2 = currAncestor2.ancestor
    }

    return topAncestor
}