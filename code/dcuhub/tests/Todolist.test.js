import React from 'react'
import {create, act} from 'react-test-renderer'
import Todolist from '../screens/Todolist'

window.addEventListener = jest.fn()
window.attachEvent = jest.fn()

const screen = create(<Todolist/>)

test('Todolist Screen Snapshot', () => {
    expect(screen).toMatchSnapshot()
})

