import React from 'react'
import {create} from 'react-test-renderer'
import ChangePass from '../screens/ChangeLoginPassword'


const screen = create(<ChangePass/>)

test('Change Password Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
