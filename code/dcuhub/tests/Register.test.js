import React from 'react'
import {create, act} from 'react-test-renderer'
import Register from '../screens/Register'


const screen = create(<Register/>)

test('Register Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
