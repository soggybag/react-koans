
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

it("renders an h1", () => {
  act(() => {
    render(<Headline />, container);
  });

  expect(container.querySelector('h1')).not.toBe(null)
});

it("renders h1 with Hello World", () => {
  act(() => {
    render(<Headline />, container);
  });

  expect(container.querySelector('h1').innerHTML).toBe('Hello World')
});

it("renders an p", () => {
  act(() => {
    render(<Headline />, container);
  });

  expect(container.querySelector('p')).not.toBe(null)
});

it("renders p with Welcome to React Koans!", () => {
  act(() => {
    render(<Headline />, container);
  });

  expect(container.querySelector('p').innerHTML).toBe('Welcome to React Koans')
});