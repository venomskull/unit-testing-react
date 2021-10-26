import {cleanup, render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Users from '../Users';


// test('should render Users component', () => {
//     render(<Users />);
//     const userElement = screen.getByTestId('user-1');
//     expect(userElement).toBeInTheDocument();
//     // expect(userElement).toHaveTextContent('hello');
//     expect(userElement).toHaveTextContent('Jayahari');
// })

afterEach(() => {
    cleanup();
})

test('should render illegal user', () => {
    const user = {id: 1, name: 'Jayahari', age: 5}
    render(<Users user={user} />)
    const userElement = screen.getByTestId('user-1');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent('Jayahari1');
})

test('should render legal user', () => {
    const user = { id: 2, name: 'Deepan', age: 37 }
    render(<Users user={user} />)
    const userElement = screen.getByTestId('user-2');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent('Deepan');
    expect(userElement).toContainHTML('green');
})

// snapshot testing

test('matches snapshot', () => {
    const user = {id: 1, name: 'Jayahari', age: 5}
    const tree = renderer.create(<Users user={user} />).toJSON();
    expect(tree).toMatchSnapshot();
})