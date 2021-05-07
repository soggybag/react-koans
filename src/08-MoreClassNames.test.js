
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import HasStyle from "./08-MoreClassNames";

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

it("renders an h1 with class name: HasStyle--h1", () => {
  act(() => {
    render(<HasStyle />, container);
  });

  const el = container.querySelector('.HasStyle--h1')

  expect(el.tagName).toBe('H1')

});

it("renders an p with class name: HasStyle--p", () => {
  act(() => {
    render(<HasStyle />, container);
  });

  const el = container.querySelector('.HasStyle--p')

  expect(el.tagName).toBe('P')

});


