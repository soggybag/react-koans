
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Buttons from "./13-Buttons";

import TodoList from "./13-Buttons";

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


it("renders onClick works", () => {

  const onClick = jest.fn()

  act(() => {
    render(<Buttons onClick={onClick} />, container);
  });

  const button = container.querySelector('button')

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(onClick).toHaveBeenCalled()
  
});
