
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HasStyle from "./07-ClassNames";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders a div with class name: HasStyle", () => {
  act(() => {
    render(<HasStyle />, container);
  });

  const el = container.querySelector('.HasStyle')

  expect(el.tagName).toBe('DIV')

});


// it("renders at least 5 li tags", () => {
//   act(() => {
//     render(<PetList />, container);
//   });

//   const uls = container.querySelector('ul')
//   const lis = uls.querySelectorAll('li')

//   expect(lis.length > 4).toBe(true)

// });


// it("renders a h1", () => {
//   act(() => {
//     render(<PersonalGreeting name="test" />, container);
//   });

//   expect(container.querySelector('h1')).not.toBe(null)
// });


// it("renders h1 with Hello with a name", () => {
//   act(() => {
//     render(<PersonalGreeting name="Jemmy" />, container);
//   });

//   expect(container.querySelector('h1').innerHTML).toBe('Hello, Jemmy!')
// });


// it("renders p with hey, stranger", () => {
//   act(() => {
//     render(<PersonalGreeting />, container);
//   });

//   expect(container.querySelector('p').innerHTML).toBe('Hey, stranger')
// });

