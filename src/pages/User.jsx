import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {PokerChipIcon, GearIcon} from "@phosphor-icons/react";

const User = () => {
  return (
    <div className="row">
      <div className="col-12 bg-secondary">
        <nav className="nav">
          <NavLink to="chips" className="nav-link text-white">
            <PokerChipIcon size={24} />
            Chips
          </NavLink>

          <NavLink to="settings" className="nav-link text-white">
            <GearIcon size={24} />
            Settings
          </NavLink>
        </nav>
      </div>

      <div className="row">
        <Outlet />
      </div>
    </div>
  );
};

export default User;
