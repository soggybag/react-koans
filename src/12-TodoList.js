/*

Often when mapping a list to create components 
to render you will start with a list of objects 
trather than a list of simple strings or numbers. 

This version of the TodoList will receive an array 
of objects each with the following properties:

- id 
- name
- isComplete

Map these into a list of `<li>` tags. 
Display the name as the text content of the tag
Use the `id` of the todo item as the `key` prop value

*/

function TodoList({ list }) {
	return (
		<ul>
			{list.map((item) => <li key={item.id}>{item.name}</li>)}
		</ul>
	)
}

export default TodoList