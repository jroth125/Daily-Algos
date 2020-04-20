/* AlgoExpert: Lowest Common Manager   

You're given three inputs, all of which are instances of an OrgChart class
that has a directReports property pointing to its direct reports. The first input 
is the top manager in an organizational chart, and the other two inputs are reports 
in the organizational chart> Write a function that returns the lowest common manager 
to the two reports.
*/
function getLowestCommonManager(topManager, reportOne, reportTwo) {
      if (reportOne === topManager || reportTwo === topManager) return topManager
      let parentsOne = allParents(topManager, reportOne)
      let parentsTwo = allParents(topManager, reportTwo)
      let minIdx = Math.min(parentsOne.length, parentsTwo.length)
      for (let i = minIdx - 1; i >= 0; i--) {
          if (parentsOne[i] === parentsTwo[i]) {
              return parentsOne[i]
          }
      }
      return topManager
  }
  
  function allParents(worker, report, bosses = [], parents = []) {
      let updatedBosses = [...bosses, worker]
      if (worker === report) parents.push(...updatedBosses)
      else {
              worker.directReports.forEach(curReport => {
          allParents(curReport, report, updatedBosses, parents)
      })
      return parents
      }
  }


  