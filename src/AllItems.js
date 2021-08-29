/* eslint-disable import/no-anonymous-default-export */
import Hello from './01-Hello'
import BigHello from './02-Big-Hello'
import Greeting from './03-Greeting'
import Headline from './04-Headline'
import PersonalGreeting from './05-PersonalGreeting'
import PetList from './06-PetList'
import ClassNames from './07-ClassNames'
import MoreClassNames from './08-MoreClassNames'

export default {
	Hello: (
	<div>
		<p>Should display Hello:</p>
		<Hello />
	</div>),
	BiGHello: (
	<div>
		<p>Should display a Hello in a heading! </p>
		<BigHello />
	</div>),
	Greeting: (
	<div>
		<p>Should display a greeting for Coco:</p>
		<Greeting name="Coco" />
	</div>),
	Headline: (
	<div>
		<p>Should display Hello World as a heading, followedby Welcome to React Koans.</p>
		<Headline />
	</div>),
	PersonalGreeting: (
	<div>
		<p>Should display Hello, Mimi.</p>
		<PersonalGreeting name="Mimi"/>
		<p>Should display Hello, stranger.</p>
		<PersonalGreeting />
	</div>),
	PetList: (
	<div>
		<p>Should display your list of pets.</p>
		<PetList />
	</div>),
	ClassNames: <ClassNames />,
	MoreClassNames: <MoreClassNames />
}