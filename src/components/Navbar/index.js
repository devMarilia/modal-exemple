import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { NavbarConteiner } from './styles'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const  menuItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Product',
      link: '/product',
    },

    ];

  return (
    <NavbarConteiner>
      <span>
        <i className="fas fa-bars" onClick={() => setIsOpen(!isOpen)} />
      </span>
        <div className={`nav-items ${isOpen && "open"}`}>
          {menuItems.map(item => (
            <li key={item.name}>
                <Link to={item.link}>{item.name}</Link>
            </li>
            ))}
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>

          </div>
        </div>
    </NavbarConteiner>
  )
}
export default Navbar