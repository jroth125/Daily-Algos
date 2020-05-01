/*
Leetcode 1274: Number of Ships in a Rectangle
Hard

(This problem is an interactive problem.)

On the sea represented by a cartesian plane, each ship is located at an integer point, and each 
integer point may contain at most 1 ship.

You have a function Sea.hasShips(topRight, bottomLeft) which takes two points as arguments and 
returns true if and only if there is at least one ship in the rectangle represented by the two 
points, including on the boundary.

Given two points, which are the top right and bottom left corners of a rectangle, return the 
number of ships present in that rectangle.  It is guaranteed that there are at most 10 ships in 
that rectangle.

Submissions making more than 400 calls to hasShips will be judged Wrong Answer.  Also, any solutions
that attempt to circumvent the judge will result in disqualification.


Input: 
ships = [[1,1],[2,2],[3,3],[5,5]], topRight = [4,4], bottomLeft = [0,0]
Output: 3
Explanation: From [0,0] to [4,4] we can count 3 ships within the range.
 

Constraints:

On the input ships is only given to initialize the map internally. You must solve this problem "blindfolded". In other words, you must find the answer using the given hasShips API, without knowing the ships position.
0 <= bottomLeft[0] <= topRight[0] <= 1000
0 <= bottomLeft[1] <= topRight[1] <= 1000
 */

/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 
 */

function cleanerCountShips(sea, topRight, bottomLeft) {
  let sum = 0;
  const [botX, botY] = bottomLeft;
  const [topX, topY] = topRight;
  if (!sea.hasShips(topRight, bottomLeft)) return 0; //if there are no ships
  if (topX === botX && topY === botY) return 1; //otherwise, if there are ships AND this is just one point

  const midX = Math.floor((botX + topX) / 2);
  const midY = Math.floor((botY + topY) / 2);
  if (topX === botX) { //if on one vertical line
    sum += countShips(sea, [botX, midY], [botX, botY]);
    sum += countShips(sea, [topX, topY], [botX, midY + 1]);
  } else if (topY === botY) { //if on one horizantal line
    sum += countShips(sea, [midX, botY], [botX, botY]);
    sum += countShips(sea, [topX, topY], [midX + 1, topY]);
  } else if (topY > botY && topX > botX) { //otherwise
    sum += countShips(sea, [midX, midY], bottomLeft);
    sum += countShips(sea, [midX, topY], [botX, midY + 1]);
    sum += countShips(sea, topRight, [midX + 1, midY + 1]);
    sum += countShips(sea, [topX, midY], [midX + 1, botY]);
  }
  return sum;
}











var countShips = function (sea, topRight, bottomLeft) {
  console.log('New call stack', topRight, bottomLeft);
  let sum = 0;
  const [botX, botY] = bottomLeft;
  const [topX, topY] = topRight;
  if (botX > topX || botY > topY) return 0;
  if (topX === botX && topY === botY) {
    return 1;
  }
  const midX = Math.floor((botX + topX) / 2);
  const midY = Math.floor((botY + topY) / 2);
  if (topX === botX) {
    if (sea.hasShips([botX, midY], [botX, botY]))
      sum += countShips(sea, [botX, midY], [botX, botY]);
    if (sea.hasShips([topX, topY], [botX, midY + 1]))
      sum += countShips(sea, [topX, topY], [botX, midY + 1]);
  } else if (topY === botY) {
    if (sea.hasShips([midX, botY], [botX, botY]))
      sum += countShips(sea, [midX, botY], [botX, botY]);
    if (sea.hasShips([topX, topY], [midX + 1, topY]))
      sum += countShips(sea, [topX, topY], [midX + 1, topY]);
  } else if (topY > botY && topX > botX) {
    if (sea.hasShips([midX, midY], bottomLeft)) {
      sum += countShips(sea, [midX, midY], bottomLeft);
    }
    if (sea.hasShips([midX, topY], [botX, midY + 1])) {
      sum += countShips(sea, [midX, topY], [botX, midY + 1]);
    }
    if (sea.hasShips(topRight, [midX + 1, midY + 1])) {
      sum += countShips(sea, topRight, [midX + 1, midY + 1]);
    }
    if (sea.hasShips([topX, midY], [midX + 1, botY])) {
      sum += countShips(sea, [topX, midY], [midX + 1, botY]);
    }
  }
  return sum;
};
