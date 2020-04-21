const trap = (pillars) => {
    const maxFromLeft = Array(pillars.length).fill(0)
    maxFromLeft[0] = pillars[0]
    for (let i = 1; i < pillars.length; i++) {
        let pilHeight = pillars[i]
        maxFromLeft[i] = Math.max(pilHeight, maxFromLeft[i - 1])
    }
    const maxFromRight = Array(pillars.length).fill(pillars[pillars.length - 1])
    for (let i = pillars.length - 2; i >= 0; i--) {
        let pilHeight = pillars[i]
        maxFromRight[i] = Math.max(maxFromRight[i + 1], pilHeight)
    }
    
    let area = Array(pillars.length).fill(0)
    pillars.forEach((_, i) => {
        let curMin = Math.min(maxFromLeft[i], maxFromRight[i])
        area[i] = curMin - pillars[i]
    })
    
    return area.reduce((sum, pillar) => {
        return sum + pillar
    }, 0)
};