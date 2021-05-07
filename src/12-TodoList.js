/*

Often when mapping a list to create components 
to render you will start with a list of objects 
trather than a list of simple strings or numbers. 



*/

function TodoList({ list }) {
	return (
		<ul>
			{list.map((item, i) => <li key={item}>{item}</li>)}
		</ul>
	)
}

export default TodoList