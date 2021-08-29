/*

BEM (Block Element Modifier) is a CSS naming system
that provides a guideline for creating class names 
that avoid collisions and describe the elements they 
name making our code easier to reason about. 

The top element element here uses the name of the 
Component: HasStyle. This is the name of the "Block"

Child elements add -- and their Element name. For 
example: 

<div className="PetList">
	<ul className="PetList--ul">
		<li className="PetList--li">Cats</li>
	</ul>
</div>

Here the parent element uses the name of the Component: PetList

The other elements add their to this with "--"

Add class names to the elements below using this pattern.
Be sure to add class names to: 

- div
- h1
- p

*/
function HasStyle() {
	return (
		<div className="Block class name">
			<h1 className="Element class name">Welcome to react Koans</h1>
			<p className="element class name">Study react by observing the world.</p>
		</div>
	)
}

export default HasStyle