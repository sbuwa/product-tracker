import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='logo'>TempLogo</div>
			<ul>
				<Link to='/'>
					<li>Login</li>
				</Link>
				<Link to='/dashboard'>
					<li>Dashboard</li>
				</Link>
			</ul>
		</div>
	)
}
