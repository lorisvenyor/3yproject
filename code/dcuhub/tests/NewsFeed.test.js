import React from 'react'
import {create, act} from 'react-test-renderer'
import NewsFeed from '../screens/NewsFeed'


const screen = create(<NewsFeed/>)

test('NewsFeed Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})
