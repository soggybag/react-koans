
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Greeting from "./03-Greeting";

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

it("renders with or with props", () => {
  act(() => {
    render(<Greeting name="friend" />, container);
  });
  expect(container.textContent).toBe("Hello friend");
})

it("renders an h1", () => {
  act(() => {
    render(<Greeting />, container);
  });
  
  expect(container.querySelector('h1')).not.toBe(null)

  // act(() => {
  //   render(<Hello name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Jenny!");

  // act(() => {
  //   render(<Hello name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe("Hello, Margaret!");
});