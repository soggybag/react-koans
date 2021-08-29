/*

With react component we sometimes want to give them
a class name. The word "class" is a reserved word in
JavaScript so the word "className" is used instead.

Since class names are global to CSS to prevent 
collisions a good idea is to use the name of the
component as the class name. 

Set className on the div to the name of the component.

*/
function HasStyle() {
	return (
		<div className="Your class name here">
			<h1>Welcome to react Koans</h1>
			<p>Study react by observing the world.</p>
		</div>
	)
}

export default HasStyle