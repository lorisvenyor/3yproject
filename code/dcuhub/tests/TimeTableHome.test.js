import React from 'react'
import {create, act} from 'react-test-renderer'
import TimeTableHome from '../screens/TimeTableHome'


const screen = create(<TimeTableHome/>)

test('TimeTable Home Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
