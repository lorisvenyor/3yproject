import React from 'react'
import {create, act} from 'react-test-renderer'
import UserProfile from '../screens/UserProfile'


const screen = create(<UserProfile/>)

test('User Profile Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
