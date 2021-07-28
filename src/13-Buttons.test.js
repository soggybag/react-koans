
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import Buttons from "./13-Buttons";


afterEach(cleanup);


it("renders onClick works", () => {
  const mockOnClick = jest.fn()
  render(<Buttons onClick={mockOnClick()}/>)

  const btnLog = screen.getByTestId("btn-log");

  fireEvent.click(btnLog);

  expect(mockOnClick).toHaveBeenCalledTimes(1)


  
});

