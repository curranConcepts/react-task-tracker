import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<p>Welcome to Profit Prophet</p>
		<NavLink to='/help' activeStyle>
			Help
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/logout'>Log Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

