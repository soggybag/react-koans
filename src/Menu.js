import './Menu.css'

function Menu({ items, onClick }) {
	return (
		<div className="Menu">
			{items.map(item => <button onClick={() => onClick(item)}>{item}</button>)}
		</div>
	)
}

export default Menu