const twoCitySchedCost = (costs) => {
    costs.sort((a, b) => {
        return costFlightA(a) - costFlightA(b)
    })
    let totalCost = 0
    for (let i = 0; i < costs.length; i++) {
        let curFlights = costs[i]
        if (i < costs.length / 2) {
            totalCost += curFlights[0]
        } else {
            totalCost += curFlights[1]
        }
    }
    return totalCost
};

function costFlightA(user) {
    return user[0] - user[1]
}