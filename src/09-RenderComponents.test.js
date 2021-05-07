
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PageHeader from "./09-RenderComponents";

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


it("renders Hello Component in the PageHeader Component", () => {
  act(() => {
    render(<PageHeader />, container);
  });

  const el = container.querySelector('div')
  expect(el.textContent).toBe('Hello World')


});
