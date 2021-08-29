/*

The best part of component architecture is that props
allow you to customize how components are displayed. 
This means you can use a component many times and each 
time it can display differently! 

Import the Greeting component. Use it to greet people
with the following names: 

- Amy
- Bob
- Cat

*/

import Greeting from './03-Greeting'

function PageHeader() {
	return (
		<header>
			{/* render three greeting components here */}
		</header>
	)
}

export default PageHeader