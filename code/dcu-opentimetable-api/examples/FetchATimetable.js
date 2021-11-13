

let OpenTimetable = require('../dcu-opentimetable.js')

OpenTimetable.FetchTimetable('CASE3', 'Wednesday', new Date(2021, 0, 18))
.then(Data => {
    console.log(Data)
    console.log(Data[0]["CategoryEvents"])
})
.catch(err => {
    console.log(err)
})

// we only need the CategoryEvents array
// under the categoryevents array, we only need the following
// description, enddatetime, startdatetime, location, eventtype (probs add the lecturer name but leave that for now i guess)