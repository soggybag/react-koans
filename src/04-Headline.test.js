
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Headline from "./04-Headline";

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
    render(<Headline />, container);
  });
  expect(container.textContent).toBe("Hello World");
});