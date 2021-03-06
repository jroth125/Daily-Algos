/*
Leetcode 1396: Design Underground System
Medium

Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.
3. getAverageTime(string startStation, string endStation) 

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened 
directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets
 in at time t1 at some station, then it gets out at time t2 with t2 > t1. All events happen in 
 chronological order.
*/


// class UndergroundSystem {
    
//   constructor() {
//     this.stations = {};
//     this.endTimes = {};
//     this.startingLocs = {};
//   }
//   checkIn(id, stationName, t) {
//     if (!this.stations[stationName]) {
//       this.stations[stationName] = { [id]: t };
//     } else {
//       this.stations[stationName][id] = t;
//     }
//     this.startingLocs[id] = stationName;
//   }

//   checkOut(id, stationName, t) {
//     const startingLoc = this.startingLocs[id];
//     const startingTime = this.stations[startingLoc][id];
//     const travelTime = t - startingTime;
//     if (this.endTimes[`${startingLoc}-${stationName}`] !== undefined) {
//       const [prevPeople, prevAvg] = this.endTimes[
//         `${startingLoc}-${stationName}`
//       ];
//       const newAvg = (prevAvg * prevPeople + travelTime) / (prevPeople + 1);
//       this.endTimes[`${startingLoc}-${stationName}`][0]++;
//       this.endTimes[`${startingLoc}-${stationName}`][1] = newAvg;
//     } else {
//       this.endTimes[`${startingLoc}-${stationName}`] = [1, travelTime];
//     }

//     delete this.stations[startingLoc][id];
//   }

//   getAverageTime(startStation, endStation) {
//     return this.endTimes[`${startStation}-${endStation}`][1];
//   }
// }


class UndergroundSystem {
  constructor() {
      this.startingStations = {}
      this.usersAtWhatStation = {}
      this.timesAndPeople = {}
  }
  
  checkIn(id, stationName, time) {
      this.usersAtWhatStation[id] = stationName
      if (!this.startingStations[stationName]) this.startingStations[stationName] = {[id]: time}
      else this.startingStations[stationName][id] = time
  }
  
  checkOut(id, stationName, time) {
      const beforeTime = this.startingStations[this.usersAtWhatStation[id]][id]
      console.log('type is', beforeTime)
      const startStation = this.usersAtWhatStation[id]
      const travelTime = time - beforeTime
      if (!this.timesAndPeople[`${startStation}-${stationName}`]) {
          this.timesAndPeople[`${startStation}-${stationName}`] = [1, time - beforeTime]
      } else {
          const [beforePeople, beforeAvg] = this.timesAndPeople[`${startStation}-${stationName}`] 
          console.log(beforeAvg, beforePeople)
          const newAvg = (beforeAvg * beforePeople + travelTime) / (beforePeople + 1)
          this.timesAndPeople[`${startStation}-${stationName}`] = [beforePeople + 1, newAvg]
      }
      delete this.usersAtWhatStation[id]
      delete this.startingStations[this.usersAtWhatStation[id]]
  }
  
  getAverageTime(startStation, endStation) {
      return this.timesAndPeople[`${startStation}-${endStation}`][1]
  }
}

let subway = new UndergroundSystem
subway.checkIn(4, 'Penn', 4)
subway.checkOut(4, 'Mott', 6)
console.log(subway.timesAndPeople)