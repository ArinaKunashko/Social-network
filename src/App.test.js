import { render, screen } from '@testing-library/react';
import SamuraiJSApp from './App';



<div role={'main'}></div>
test('renders without crashing', () => {
  render(<SamuraiJSApp />);
  const div = screen.getByRole("img");
  expect(div).toBeInTheDocument();
  });


// test('renders without crashing', () => {
//   const div = ReactDOM.render(<BrowserRouter> <Provider store={store}> <SamuraiJSApp/> </Provider>
//   </BrowserRouter>)
//   ReactDOM.unmountComponentAtNode(div)
  // root.render(<SamuraiJSApp />, root );
  // root.unmountComponentAtNode(root)
  // const linkElement = screen.getByText(/main/i);
  // expect(linkElement).toBeInTheDocument();
// });
