/*

Buttons are handled with an onClick action.

Create a button tag below after return. Put the 
label for the button between the tags. 

<button>Click Me!</button>

The action for button goes into the opening tag

*/

function Buttons({ list }) {
  return (
    <button onClick={(e) => console.log('Hello!!!!')} data-testid="btn-log">
      Click!
    </button>
  );
}

export default Buttons;
