
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PageHeader from "./10-RenderComponentWithProps";

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


it("renders three greetings", () => {
  act(() => {
    render(<PageHeader />, container);
  });

  const threeH1 = container.querySelectorAll('div > h1')
  expect(threeH1.length).toBe(3)
});

it("renders the names Amy, Bob, and Cat", () => {
  act(() => {
    render(<PageHeader />, container);
  });

  const threeH1 = container.querySelectorAll('div > h1')
  expect(threeH1.length).toBe(3)
});
