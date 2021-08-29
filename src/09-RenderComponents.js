/*

Often components are imported and rendered 
within other components. This is core idea and 
part of Reacts power. 

The PageHeader component needs to import 
and render the Hello component.

*/

import Hello from './01-Hello'

function PageHeader() {
	return (
		<header>
			{/* render hello component here */}
		</header>
	)
}

export default PageHeader