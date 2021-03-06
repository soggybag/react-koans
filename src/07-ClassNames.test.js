
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
