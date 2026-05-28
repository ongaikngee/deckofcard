import React from 'react'
import { NavLink } from "react-router-dom";
import { PokerChipIcon, GearIcon } from "@phosphor-icons/react";

export const UserNavBar = () => {
	return (
		<div className="col-12 bg-secondary py-3">
			<nav className="nav">
				<NavLink to="chips" className="nav-link text-white">
					<div className="d-flex flex-column align-items-center">
						<PokerChipIcon size={40} />
						<div className="mb-0">Chips</div>
					</div>
				</NavLink>

				<NavLink to="settings" className="nav-link text-white">
					<div className="d-flex flex-column align-items-center">
						<GearIcon size={40} />
						<div className="mb-0">Settings</div>
					</div>
				</NavLink>
			</nav>
		</div>
	)
}


export default UserNavBar