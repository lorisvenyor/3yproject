import React from 'react'
import {create, act} from 'react-test-renderer'
import Rooms from '../screens/Rooms'


const screen = create(<Rooms/>)

test('Rooms Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
