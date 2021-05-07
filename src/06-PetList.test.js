
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PetList from "./06-PetList";

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


it("renders only one ul", () => {
  act(() => {
    render(<PetList />, container);
  });

  expect(container.querySelector('ul')).not.toBe(null)
  expect(container.querySelectorAll('ul').length).toBe(1)

});


it("renders at least 5 li tags", () => {
  act(() => {
    render(<PetList />, container);
  });

  const uls = container.querySelector('ul')
  const lis = uls.querySelectorAll('li')

  expect(lis.length > 4).toBe(true)

});

