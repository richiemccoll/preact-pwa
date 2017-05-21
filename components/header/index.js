import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				{/*<h1>Machine Standard</h1>*/}
				{/*<nav>*/}
					{/*<Link activeClassName="active" href="/">Dashboard</Link>*/}
					{/*<Link activeClassName="active" href="/profile">Me</Link>
					<Link activeClassName="active" href="/profile/john">John</Link>*/}
				{/*</nav>*/}
			</header>
		);
	}
}
