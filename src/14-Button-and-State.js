import { useState } from 'react'

function Buttons() {
	const [count, setCount] = useState(0)
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={(e) => setCount(count + 1)} data-testid="btn-log">
				Click!
			</button>
		</div>
	);
}

export default Buttons;
