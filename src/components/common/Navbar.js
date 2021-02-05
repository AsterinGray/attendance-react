import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1 className="text-black">Learning Portal</h1>
      <p>Hello, Admin LnT</p>
      <ul>
        <li className="text-medium">
          <Link to="/admin">Home</Link>
        </li>
        <li className="text-medium">
          <Link to="/admin/praetorian">Praetorian</Link>
        </li>
        <li className="text-medium">
          <Link to="/admin/classes">Classes</Link>
        </li>
        <li className="text-medium">
          <Link to="/admin/member">Members</Link>
        </li>
      </ul>
      <footer>
        <p>Learning and Training</p>
      </footer>
    </nav>
  );
};

export default Navbar;
