/*

You'll often have lists of data you want to turn
into components. 

When rendering a dynamic list you'll need to add
a key prop to each element. The key prop can have 
any value as long as that value is unique for each 
element in the list. 

To map a list of elements you can do this:

list.map(item => <li key={item}>{item}</li>)

Here the key is the item. Assume item is  a string. 

The TodoList Component below will receive a list of
of strings on props as `props.list`. You should
render each of these as `<li>` tags.

Be sure to add a key prop to each li you create. 
For this example you can use the string provided
by the list as the key. 

*/

function TodoList({ list }) {
	return (
		<ul>
			{/* Use map to turn the list into li tags! */}
		</ul>
	)
}

export default TodoList