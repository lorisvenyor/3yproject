
const express = require('express')
const app = express()
// const cors = require('cors')
const port = 3000 || process.env.PORT   // process.env.PORT is used when you assign an environment variable value otherwise 3000 is used

app.use(express.json())
// app.use(cors())

const openTimetable = require('./dcu-opentimetable.js')     // from GitHub author Hamzah

let course_code = ""
let date = ""


app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/", (req, res) => {    
    
    console.log('request is made')
    course_code = req.body.course_code
    date = req.body.date

    console.log(`get the following data: ${course_code}, ${date}`) 

    let dayName = new Date().toLocaleDateString('en-UK', { weekday: 'long' }) // returns Monday, Tuesday, etc. day of the week
    // let jsDateFormat = new Date() // returns the current date
    //console.log(jsDateFormat)
    const splitDate = date.split("T")[0].split("-") // result should be ["year", "month", "day"]
    
    const splitDateList = splitDate.map(n => parseInt(n, 10))
    const year = splitDateList[0]           // year
    const month = splitDateList[1] - 1       // month is zero indexed
    const day = splitDateList[2]
    
    const jsDateFormat = new Date(year, month, day)
    //console.log(jsDateFormat)
    dayName = jsDateFormat.toLocaleDateString('en-UK', { weekday: 'long' })
    // console.log(jsDateFormat)
    // console.log(dayName)
    
    console.log(`data to be fetched: ${course_code}, ${dayName}, ${jsDateFormat}`)      // this returns: data to be fetched: 'course_code', 'Thursday', 'Thu Feb 18 2021 16:58:09 GMT+0000 (Greenwich Mean Time)'
    const tempDate = jsDateFormat.getTime() // millis, in order to get the current date smh
    
    openTimetable.FetchTimetable(course_code, dayName, jsDateFormat)
        .then(Data => {
            console.log(tempDate)
            const get_classdata = Data[0]["CategoryEvents"]
            const sendData = {
                timetable: get_classdata,
                dateFormat: new Date(tempDate), 
                dayName: dayName
            }
            console.log(sendData.dayName)
            console.log(sendData.timetable)
            res.send(sendData)      // sends the data back to the client which has the class data and js date format and the day
        })
        .catch(err => {
            res.send('error in server')
            console.log("opentimetable error:", err)
        })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
   })


// req = request
// res = response
// var = variable 
// const = constant , no resetting
// let = use if u wanna define a variable that u can reset later
// backticks `` are used to use a template string (${constant})