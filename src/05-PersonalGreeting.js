/*

This component receives name on props. Sometimes
the name is missing. 

If the name exists it should display the text: 

Hello, <name>! 

In an h1 tag


If the name is missing it should display: 

Hey, strnager

In a p tag

*/
function PersonalGreeting({ name }) {
	if (name) {
		// Greet by name
		return <p></p>
	}
	// Greet a stranger
	return <p></p>
}

export default PersonalGreeting