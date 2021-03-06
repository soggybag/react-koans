
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import BigHello from "./02-Big-Hello";

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

it("renders with Hello World", () => {
  act(() => {
    render(<BigHello />, container);
  });
  expect(container.textContent).toBe("Hello World");
})

it("renders an h1", () => {
  act(() => {
    render(<BigHello />, container);
  });
  
  expect(container.querySelector('h1')).not.toBe(null)

});