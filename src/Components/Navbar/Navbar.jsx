import { HashLink as NavLink } from "react-router-hash-link";

const NavBar = () => {
  const NavLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skill', label: 'Skill' },
    { to: 'project', label: 'Project' },
  ];

  const NavNavLinks = NavLinks.map((link, index) => (
    <li key={index}>
      <NavLink smooth to={`#${link.to}`}>
        {link.label}
      </NavLink>
    </li>
  ));

  return (
    <div className="navbar bg-yellow-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {NavNavLinks}
          </ul>
        </div>
        <div className=" flex items-center">
          <div className="w-20 rounded-full">
            <img className="" src="https://i.postimg.cc/J0v31F8z/navImage.png" alt="img" />
          </div>
          <div>
            <h1 className="text-3xl text-green-600">Portfolio</h1>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavNavLinks}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
