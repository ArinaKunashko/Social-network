import { render } from '@testing-library/react';
import ProfileStatus from './ProfileStatus';
import {create} from 'react-test-renderer'
import TestRenderer from 'react-test-renderer';
 


describe('ProfileStatus component', () => { 
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='My status' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('My status')

    });     
    
    test('after creation <span> should be displayed with correct status', () => {
        const testRenderer = TestRenderer.create(<ProfileStatus status='My status' />)
        const testInstance = testRenderer.root;
         let span = testInstance.findByType('span')
        expect(span).not.toBeNull()

})

test('after creation <input> should not be displayed', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='My status' />)
    const testInstance = testRenderer.root;
     
    expect( () => {
        let input = testInstance.findByType('input')
    }).toThrow()

})


test('input should be displayed in editMode instead of span', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status='My status' />)
    const testInstance = testRenderer.root;
    let span = testInstance.findByType('span')
    span.props.onDoubleClick()
    let input = testInstance.findByType('input')
    expect(input.props.value).toBe("My status")

})

test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status='My status' updateStatus ={mockCallback} />)
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)

})
})