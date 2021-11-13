import React from 'react'
import {create, act} from 'react-test-renderer'
import EditProfile from '../screens/EditProfile'
import firebase, { initializeApp } from 'firebase/app'



const screen = create(<EditProfile/>)

test('Edit Profile Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
