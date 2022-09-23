import React from 'react'
import { slide as Menu } from 'react-burger-menu';

const Sidebar = () => {
  return (
    <Menu className="side-bar">
      <div>
        <h1>Replays</h1>
      </div>
        <a>
          Test_item01
        </a>
    </Menu>
  );
};

export default Sidebar