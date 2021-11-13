import React from 'react'
import {create} from 'react-test-renderer'
import ForgotPassword from '../screens/ForgotPassword'


const screen = create(<ForgotPassword/>)

test('Forgot Password Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
