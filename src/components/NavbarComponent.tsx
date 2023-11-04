'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import facebookLogo from "../assets/facebookLogo.png";

export default function NavbarComponent() {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        <img src={facebookLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Synapso</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Fiantso Harena</span>
            <span className="block truncate text-sm font-medium">fiantsorav@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Settings & Privacy</Dropdown.Item>
          <Dropdown.Item>Help & Support</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='text-darkGrey hover:text-midBlue active:text-midBlue'>
        <Navbar.Link href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Profile</Navbar.Link>
        <Navbar.Link href="#">Group</Navbar.Link>
        <Navbar.Link href="#">Live</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
