const MinHeap = require('../Trees/min-heap-construction')

const meetingRooms = (meetings) => {
    meetings.sort((a, b) => a[0] - b[0])
    const minHeap = new MinHeap([meetings[0][1]])
    for (let i = 1; i < meetings.length; i++) {
        let curMeeting = meetings[i]
        let curMeetingStart = curMeeting[0]
        let curMeetingEnd = curMeeting[1]
        if (minHeap.peek() <= curMeetingStart) {
            minHeap.remove()
            minHeap.insert(curMeetingEnd)
        } else {
            minHeap.insert(curMeetingEnd)
        }
    }
    return minHeap.heap.length
}

console.log(meetingRooms([[0, 30],[5, 10],[15, 20]]))