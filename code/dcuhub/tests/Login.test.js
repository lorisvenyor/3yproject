import React from 'react'
import {create} from 'react-test-renderer'
import Login from '../screens/Login'

jest.useFakeTimers()

const screen = create(<Login/>)

test('Login Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})

