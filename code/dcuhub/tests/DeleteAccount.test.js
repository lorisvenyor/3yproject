import React from 'react'
import {create, act} from 'react-test-renderer'
import DeleteAccount from '../screens/DeleteAccount'


const screen = create(<DeleteAccount/>)

test('Delete Account Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
