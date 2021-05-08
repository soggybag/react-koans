
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TodoList from "./12-TodoList";

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


const todoList = [
  { id:'ax87', name:'Feed the cat' },
  { id:'ki98', name:'Shop for onion rings' },
  { id:'mh21', name:'Celecrate the day' }
]


it("renders contains a list of li tags", () => {
  act(() => {
    render(<TodoList list={todoList} />, container);
  });

  const listItems = container.querySelectorAll('li')
  expect(listItems.length > 0).toBe(true)
});


it("renders one li for each todo item", () => {
  act(() => {
    render(<TodoList list={todoList} />, container);
  });

  const listItems = container.querySelectorAll('li')
  expect(listItems.length).toBe(todoList.length)
});

it("renders all todo items", () => {
  act(() => {
    render(<TodoList list={todoList} />, container);
  });

  const listItems = container.querySelectorAll('li')
  todoList.forEach((item, i) => {
    expect(listItems[i].textContent).toBe(item.name)
  });
});

it("renders all todo items using the id for key prop", () => {
  act(() => {
    render(<TodoList list={todoList} />, container);
  });

  const todoEl = mount()

  // const listItems = container.querySelectorAll('li')
  // todoList.forEach((item, i) => {
  //   expect(listItems[i].dataset.key).toBe(item.id)
  // });
});
